const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  singleSpaWebpackConfig.experiments = {
    outputModule: true,
  };
  
  singleSpaWebpackConfig.output.library = {
    type: "module",
  };
  
  singleSpaWebpackConfig.output.chunkLoadingGlobal = "webpackChunk_ecom_micro_frontend_cart";
  
  singleSpaWebpackConfig.output.filename = 'ecom-micro-frontend-cart.js';
  singleSpaWebpackConfig.output.clean = true;

  if (!singleSpaWebpackConfig.devServer) {
    singleSpaWebpackConfig.devServer = {};
  }
  singleSpaWebpackConfig.devServer.port = 3002;
  singleSpaWebpackConfig.devServer.headers = {
    "Access-Control-Allow-Origin": "*",
  };

  singleSpaWebpackConfig.output.uniqueName = "ecom-micro-frontend-cart";

  console.log('Custom Webpack Config for ecom-micro-frontend-cart applied.', singleSpaWebpackConfig);

  return singleSpaWebpackConfig;
};
