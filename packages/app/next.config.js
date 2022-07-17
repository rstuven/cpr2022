const REPO_NAME = "cpr2022";

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  basePath: isProduction ? `/${REPO_NAME}` : "",
  assetPrefix: isProduction ? `/${REPO_NAME}/` : "",
};
