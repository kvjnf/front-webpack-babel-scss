const path = require('path');
const webpack = require('webpack');
// globでファイル指定をするため
const entry = require('webpack-glob-entry')
const ES_PATH = path.join(__dirname, './resources/js/roots');
const DIST_JS_PATH = path.join(__dirname, './public/assets/js');

module.exports = {
  devtool: 'inline-source-map',
  entry: entry(`${ES_PATH}/*.js`),
  output: {
    path: DIST_JS_PATH,
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
          loader: 'babel-loader'
        },
        {
          loader: 'eslint-loader',
          options: {
            fix: true,
            failOnError: true
          }
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.js']
  }
};
