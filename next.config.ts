import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const ownerName = process.env.GITHUB_REPOSITORY_OWNER;
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const isUserOrOrganizationPagesRepository = repositoryName === `${ownerName}.github.io`;
const inferredGitHubPagesBasePath =
  isGitHubPagesBuild && repositoryName && !isUserOrOrganizationPagesRepository ? `/${repositoryName}` : "";
const githubPagesBasePath = isGitHubPagesBuild ? process.env.NEXT_PUBLIC_BASE_PATH ?? inferredGitHubPagesBasePath : "";

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? "export" : undefined,
  trailingSlash: isGitHubPagesBuild,
  basePath: githubPagesBasePath || undefined,
  assetPrefix: githubPagesBasePath || undefined,
  images: {
    unoptimized: isGitHubPagesBuild,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
