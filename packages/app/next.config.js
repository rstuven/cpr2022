const REPO_NAME = "cpr2022";
const CUSTOM_DOMAIN = true;

const isProduction = process.env.NODE_ENV === "production";
const useRepoName = isProduction && !CUSTOM_DOMAIN;

module.exports = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  basePath: useRepoName ? `/${REPO_NAME}` : undefined,
  assetPrefix: useRepoName ? `/${REPO_NAME}/` : undefined,
};
