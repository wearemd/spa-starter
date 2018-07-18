const path              = require('path');
const webpack           = require('webpack');
const merge             = require('webpack-merge');
const common            = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const utils             = require('./utils')

module.exports = merge(common, {
  devtool: 'source-map',
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist') 
  },
  module: {
    rules: [
      { 
        test: /\.(vue)$/, 
        loader: 'vue-loader',
        options: {
          loaders: {
            sass: ExtractTextPlugin.extract({
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    url: false,
                    minimize: true,
                    sourceMap:  false
                  }
                },
                utils.sassLoader(),
                utils.sassResourcesLoader()
              ],
              fallback: 'vue-style-loader'
            })
          }
        }
      }
    ]
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    utils.definePlugin({
      'process.env.NODE_ENV': 'production',
      'SOME_CONST': 'Hello from production'
    }),
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js($|\?)/i,
      uglifyOptions: {
        compress: true
      }
    }),
    new ExtractTextPlugin({
      filename: "css/style.[contenthash].css",
      allChunks: true
    }),
     // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: true,
      children: true,
      minChunks: 2
    })
  ]
})
