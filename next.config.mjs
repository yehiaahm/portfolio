/** @type {import('next').NextConfig} */
// Served from the domain root by default (Cloudflare Pages, local dev).
// GitHub Pages hosts the site under /portfolio, so its workflow sets BASE_PATH.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
