import type { NextConfig } from "next";

const repoName = "web-login-reg"; // 👈 must match your repo name

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
};

export default nextConfig;
