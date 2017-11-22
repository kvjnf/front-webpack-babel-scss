const path = require('path');
const webpack = require('webpack');
// globでファイル指定をするため
const entry = require('webpack-glob-entry')
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SCSS_PATH = path.join(__dirname, './resources/scss/roots');
const DIST_CSS_PATH = path.join(__dirname, './public/assets/css');


module.exports = {
  devtool: 'inline-source-map',
  entry: entry(`${SCSS_PATH}/*.scss`),
  output: {
    path: DIST_CSS_PATH,
    filename: '[name].css'
  },
  module: {
    rules: [{
      test: /\.(sass|scss)$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader : 'css-loader',
          options : {
            minimize: true,
            sourceMap: true,
            url: false
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      })
    }]
  },
  resolve: {
    alias: {},
    modules: [],
    extensions: ['.js', '.css', '.less']
  },
  plugins: [
    new ExtractTextPlugin(`[name].css`,{
      allChunks: true
    })
  ]
};
