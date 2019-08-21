const merge = require("webpack-merge");
const common = require("./common.js");
const webpack = require("webpack");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const notifier = require("node-notifier");
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
          "css-loader?url=false",
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
      },
      onErrors: (severity, errors) => {
        if (severity !== "error") return;

        const error = errors[0];
        const filename = error.file && error.file.split("!").pop();

        notifier.notify({
          title: "SPA-VUE",
          message: severity + ": " + error.name,
          subtitle: filename || "",
          icon: path.join(__dirname, "logo.png")
        });
      }
    }),
    utils.definePlugin()
  ]
});
