const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: ["./src/app.js"],
  output: {
    filename: "js/app.js",
    path: path.resolve(__dirname, "../site"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[contenthash].[ext]',
            context: path.resolve(__dirname, "../assets/images"),
            outputPath: 'images',
            esModule: false
          }
        }
      },
      {
        test: /\.(woff|woff2|ttf)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[contenthash].[ext]',
            context: path.resolve(__dirname, "../assets/fonts"),
            outputPath: 'fonts',
            publicPath: url => '../fonts/' + url
          }
        }
      },
      {
        test: /\.(vue)$/,
        loader: "vue-loader"
      },
      {
        test: /\.pug$/,
        oneOf: [
          // this applies to `<template lang="pug">` in Vue components
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          // this applies to pug imports inside JavaScript
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      inject: true
    }),
    // See https://github.com/vuejs/core/blob/main/packages/vue/README.md#bundler-build-feature-flags
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true
    })
  ],
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "./fonts": path.resolve(__dirname, "../assets/fonts"),
      "./images": path.resolve(__dirname, "../assets/images")
    },
    fallback: {
      fs: false
    }
  }
};
