const isGithubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.NEXT_PUBLIC_REPOSITORY_NAME ?? "";
const basePath = isGithubPages && repositoryName ? `/${repositoryName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
