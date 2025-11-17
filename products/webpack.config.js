const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ecom-micro-frontend",
    projectName: "products",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 3001,
      historyApiFallback: true,
      hot: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });
};
