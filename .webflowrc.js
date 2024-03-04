export default {
  host: "https://api.webflow.com",
  rootDir: "./devlink",
  siteId: process.env.WEBFLOW_SITE_ID,
  authToken: process.env.WEBFLOW_AUTH_TOKEN, // An environment variable is recommended for this field.
  cssModules: true,
  fileExtensions: {
    js: "jsx",
  },
};
