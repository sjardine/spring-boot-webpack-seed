var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  build: path.join(__dirname, '..', 'target', 'classes', 'public')
};

module.exports = {
  entry: './app/index.js',
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'app-bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
