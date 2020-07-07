const { merge } = require("webpack-merge");
const common = require("./common.js");
const webpack = require("webpack");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const path = require("path");
const utils = require("./utils");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    },
    clientLogLevel: "none",
    quiet: true // necessary for FriendlyErrorsPlugin
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          "vue-style-loader",
          "css-loader",
          utils.sassLoader(),
          utils.sassResourcesLoader()
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ["Your application is running here: http://localhost:3000"]
      }
    }),
    utils.definePlugin()
  ]
});
