const { merge } = require("webpack-merge");
const common = require("./common.js");
const webpack = require("webpack");
const path = require("path");
const utils = require("./utils");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: 3000,
    client: {
      logging: "none",
      progress: true,
      overlay: {
        warnings: true,
        errors: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          "vue-style-loader",
          utils.cssLoader(),
          utils.sassLoader(),
          utils.sassResourcesLoader()
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    utils.definePlugin()
  ]
});
