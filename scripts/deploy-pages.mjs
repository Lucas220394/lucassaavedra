/**
 * Publica el sitio en GitHub Pages (rama `gh-pages`).
 *
 * Uso:  npm run deploy
 *
 * Hace el export estático con basePath /lucassaavedra y sube el contenido de
 * ./out a la rama huérfana `gh-pages` mediante un git worktree temporal.
 * No necesita el scope `workflow` del token ni ninguna GitHub Action.
 */
import { execFileSync } from "node:child_process";
import { existsSync, writeFileSync, cpSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const OUT = resolve(ROOT, "out");
const WORKTREE = resolve(ROOT, ".gh-pages");
const BRANCH = "gh-pages";

const git = (args, cwd = ROOT, opts = {}) =>
  execFileSync("git", args, { stdio: "inherit", cwd, ...opts });
const gitQuiet = (args, cwd = ROOT) => {
  try {
    execFileSync("git", args, { stdio: "ignore", cwd });
    return true;
  } catch {
    return false;
  }
};

console.log("→ Build estático (GITHUB_PAGES=true)…");
const nextBin = resolve(ROOT, "node_modules", "next", "dist", "bin", "next");
execFileSync(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
  cwd: ROOT,
  env: { ...process.env, GITHUB_PAGES: "true" },
});

if (!existsSync(resolve(OUT, "index.html"))) {
  console.error("✗ No se generó ./out/index.html. Abortando.");
  process.exit(1);
}
writeFileSync(resolve(OUT, ".nojekyll"), "");

console.log(`→ Preparando worktree para la rama ${BRANCH}…`);
if (existsSync(WORKTREE)) git(["worktree", "remove", "--force", ".gh-pages"]);

const hasRemoteBranch = gitQuiet(["fetch", "origin", BRANCH]);
if (hasRemoteBranch) {
  git(["worktree", "add", "-B", BRANCH, ".gh-pages", `origin/${BRANCH}`]);
} else {
  git(["worktree", "add", "-B", BRANCH, ".gh-pages"]);
}

console.log("→ Sincronizando archivos…");
gitQuiet(["rm", "-r", "--quiet", "--ignore-unmatch", "."], WORKTREE);
cpSync(OUT, WORKTREE, { recursive: true });

console.log("→ Commit y push…");
git(["add", "-A"], WORKTREE);
if (gitQuiet(["diff", "--cached", "--quiet"], WORKTREE)) {
  console.log("(sin cambios que publicar)");
} else {
  git(["commit", "-m", `deploy: ${new Date().toISOString()}`], WORKTREE);
  git(["push", "origin", BRANCH], WORKTREE);
}

git(["worktree", "remove", "--force", ".gh-pages"]);
console.log("✓ Publicado en https://lucas220394.github.io/lucassaavedra/");
