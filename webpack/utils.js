const path    = require('path');
const webpack = require('webpack');

const configuration = require(path.resolve(__dirname, '../package.json')).configuration;

exports.sassLoader = function() {
  return {
    loader: 'sass-loader',
    options: {
      indentedSyntax: true,
      includePaths: [
        path.resolve(__dirname, '../sass'),
        path.resolve(__dirname, '../node_modules')
      ]
    }
  }
}

exports.sassResourcesLoader = function() {
  return {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.resolve(__dirname, '../sass/utilities/mixins.sass'),
        path.resolve(__dirname, '../sass/utilities/initial-variables.sass')
      ]
    }
  }
}

// Stringify object attributes using `JSON.stringify`
function stringifyAttributes(obj){
  Object.keys(obj).forEach(function(key){
    obj[key] = JSON.stringify(obj[key])
  })

  return obj
}

// Return a new webpack.DefinePlugin with default an given options merged 
// A bit simpler than configuring webpack-merge - 2018/07/18
exports.definePlugin = function(opts = {}){
  let defaults = stringifyAttributes(configuration.definePlugin)

  // webpack.DefinePlugin require JSON.stringified attributes 
  // source: https://webpack.js.org/plugins/define-plugin/ - 2018/07/18
  opts = stringifyAttributes(opts)
  opts = Object.assign(defaults, opts)

  return new webpack.DefinePlugin(opts)
}
