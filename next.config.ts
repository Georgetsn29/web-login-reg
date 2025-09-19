import type { NextConfig } from "next";

const repoName = "web-login-reg";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
};

export default nextConfig;
