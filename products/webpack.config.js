const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "ecom-micro-frontend";
  const projectName = "products";
  
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName,
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  defaultConfig.externals = ['single-spa', new RegExp(`^@${orgName}/`)];

  defaultConfig.module.rules = defaultConfig.module.rules.filter(
    (rule) => !rule.test?.toString().includes("css")
  );

  console.log("Default: ", defaultConfig);

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: false,
              },
            },
            "postcss-loader",
          ],
        },
      ],
    },
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
