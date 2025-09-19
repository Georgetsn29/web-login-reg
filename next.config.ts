// next.config.ts
import type { NextConfig } from "next";

const repoName = "login-reg-react"; // your repo name

const nextConfig: NextConfig = {
  output: "export",  // <-- replaces `next export`
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
};

export default nextConfig;
