const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const utils = require("./utils");

module.exports = merge(common, {
  mode: "production",
  entry: {
    app: "./src/app.js"
  },
  output: {
    filename: "js/[name].[chunkhash].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.(sass)$/,
        use: [
          "vue-style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader?url=false",
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
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
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
