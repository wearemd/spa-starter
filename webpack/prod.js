const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const utils = require("./utils");

module.exports = merge(common, {
  mode: "production",
  entry: {
    app: "./src/app.js"
  },
  output: {
    filename: "js/[name].[chunkhash].js",
    path: path.resolve(__dirname, "../site")
  },
  module: {
    rules: [
      {
        test: /\.(sass)$/,
        use: [
          "vue-style-loader",
          MiniCssExtractPlugin.loader,
          utils.cssLoader(),
          utils.sassLoader(),
          utils.sassResourcesLoader()
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    utils.definePlugin({
      "process.env.NODE_ENV": "production",
      SOME_CONST: "Hello from production"
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.[contenthash].css"
    })
  ]
});
