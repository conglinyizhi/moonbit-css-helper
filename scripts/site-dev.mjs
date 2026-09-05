import { spawn } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const siteDir = resolve(root, "site");
const port = process.env.PRECSS_DEV_PORT ?? "8111";
const moonEnv = {
  ...process.env,
  MOON_CC: process.env.MOON_CC ?? "clang",
  MOON_AR: process.env.MOON_AR ?? "ar",
  MOON_LD: process.env.MOON_LD ?? "clang",
};

let rebuilding = false;
let rebuildQueued = false;
let runtimeQueued = false;
let stopping = false;
let initialBuild = true;
let timer;
let warren;

function run(command, args, options = {}) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd ?? root,
      env: options.env ?? process.env,
      stdio: "inherit",
    });
    child.once("error", reject);
    child.once("exit", (code, signal) => {
      if (signal) {
        reject(new Error(`${command} terminated by ${signal}`));
      } else if (code !== 0) {
        reject(new Error(`${command} exited with code ${code}`));
      } else {
        resolvePromise();
      }
    });
  });
}

async function buildRuntime() {
  console.log("[site:dev] rebuilding browser compiler...");
  await run("moon", ["build", "--target", "js", "example/webruntime/web"], {
    cwd: root,
    env: moonEnv,
  });
  await run("moon", ["build", "--target", "wasm-gc", "example/webruntime/wasm"], {
    cwd: root,
    env: moonEnv,
  });
  mkdirSync(resolve(siteDir, "public"), { recursive: true });
  copyFileSync(
    resolve(root, "_build/js/debug/build/example/webruntime/web/web.js"),
    resolve(siteDir, "public/web.js"),
  );
  copyFileSync(
    resolve(root, "_build/wasm-gc/debug/build/example/webruntime/wasm/wasm.wasm"),
    resolve(siteDir, "public/web.wasm"),
  );
  console.log("[site:dev] browser compiler updated");
}

async function buildSite() {
  if (rebuilding) {
    rebuildQueued = true;
    return;
  }
  rebuilding = true;
  try {
    do {
      const rebuildRuntime = runtimeQueued;
      rebuildQueued = false;
      runtimeQueued = false;
      console.log("[site:dev] rebuilding static site...");
      await run("moon", ["run", "cmd/ssg", "--target", "native"], {
        cwd: siteDir,
        env: { ...moonEnv, PRECSS_SITE_OUT: "public" },
      });
      if (rebuildRuntime) await buildRuntime();
      console.log("[site:dev] site/public updated");
    } while (rebuildQueued && !stopping);
  } catch (error) {
    console.error(`[site:dev] build failed: ${error.message}`);
    if (initialBuild) throw error;
  } finally {
    rebuilding = false;
  }
}

function scheduleBuild() {
  clearTimeout(timer);
  timer = setTimeout(() => void buildSite(), 120);
}

function sourceFiles(directory) {
  if (!existsSync(directory)) return [];
  const files = [];
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    const stats = statSync(path);
    if (stats.isDirectory()) files.push(...sourceFiles(path));
    else if (stats.isFile()) files.push(path);
  }
  return files;
}

function treeSignature(roots) {
  return roots
    .flatMap(sourceFiles)
    .map((path) => {
      const stats = statSync(path);
      return `${path}:${stats.size}:${stats.mtimeMs}`;
    })
    .sort()
    .join("\n");
}

function watchSite() {
  const siteRoots = ["cmd", "styles", "static"].map((name) => resolve(siteDir, name));
  const runtimeRoots = [resolve(root, "example/webruntime")];
  let siteSignature = treeSignature(siteRoots);
  let runtimeSignature = treeSignature(runtimeRoots);
  const interval = setInterval(() => {
    try {
      const nextSite = treeSignature(siteRoots);
      const nextRuntime = treeSignature(runtimeRoots);
      if (nextRuntime !== runtimeSignature) {
        runtimeSignature = nextRuntime;
        runtimeQueued = true;
        scheduleBuild();
      } else if (nextSite !== siteSignature) {
        siteSignature = nextSite;
        scheduleBuild();
      }
      siteSignature = nextSite;
    } catch (error) {
      console.error(`[site:dev] source scan failed: ${error.message}`);
    }
  }, 300);
  return () => clearInterval(interval);
}

async function main() {
  runtimeQueued = true;
  await buildSite();
  initialBuild = false;
  if (stopping) return;

  const closeWatchers = watchSite();
  console.log(`[site:dev] starting Warren on http://127.0.0.1:${port}`);
  warren = spawn("warren", [
    "-C", siteDir,
    "dev",
    "--browser-entry", "cmd/browser",
    "--server-entry", "cmd/server",
    "--server-target", "native",
    "--public-dir", "public",
    "--port", port,
  ], {
    cwd: root,
    env: moonEnv,
    stdio: "inherit",
  });

  let stop;
  warren.once("error", (error) => {
    console.error(`[site:dev] Warren failed: ${error.message}`);
    if (stop) stop();
    process.exitCode = 1;
  });
  warren.once("exit", (code) => {
    const unexpectedExit = !stopping;
    if (stop) stop();
    if (unexpectedExit && code !== 0) process.exitCode = code ?? 1;
  });

  stop = () => {
    if (stopping) return;
    stopping = true;
    clearTimeout(timer);
    closeWatchers();
    if (warren && !warren.killed) warren.kill("SIGTERM");
  };
  process.once("SIGINT", stop);
  process.once("SIGTERM", stop);
}

main().catch((error) => {
  console.error(`[site:dev] ${error.message}`);
  process.exitCode = 1;
});
