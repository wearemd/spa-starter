const path = require('path');

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
        path.resolve(__dirname, '../sass/utilities/variables.sass')
      ]
    }
  }
}