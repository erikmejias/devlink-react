export default {
  host: "https://api.webflow.com",
  rootDir: "./devlink",
  siteId: process.env.WEBFLOW_SITE_ID,
  authToken: process.env.WEBFLOW_AUTH_TOKEN,
  cssModules: true,
  fileExtensions: {
    js: "jsx", // Prefer to use JSX instead of JS
  },
};
