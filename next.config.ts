import type { NextConfig } from "next";

/**
 * En GitHub Pages el sitio se sirve desde https://<usuario>.github.io/lucassaavedra/
 * por lo que necesita basePath. El workflow define GITHUB_PAGES=true en el build.
 * En local (`npm run dev` / `npm run build`) se sirve desde la raíz.
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "lucassaavedra";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repo}` : undefined,
  images: {
    // GitHub Pages no puede correr el optimizador de imágenes de Next.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;
