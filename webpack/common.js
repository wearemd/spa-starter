const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

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
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
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
        loader: "pug-plain-loader"
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
    })
  ],
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src"),
      "./fonts": path.resolve(__dirname, "../assets/fonts"),
      "./images": path.resolve(__dirname, "../assets/images")
    },
    fallback: {
      fs: false
    }
  }
};
