const path = require('path');
const webpack = require('webpack');
// globでファイル指定をするため
const entry = require('webpack-glob-entry')
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
      test: /\.(css|sass|scss)$/,
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                autoprefixer({
                  browsers: ['last 2 versions', "> 2%"]
                })
              ]
            }
          },
          'sass-loader',
        ]
      })
    },
    {
      test: /\.(jpg|png|gif)$/,
      loader: 'file-loader?name=assets/img/[name].[ext]'
    }
    ]
  },
  resolve: {
    alias: {},
    modules: [],
    extensions: ['.css', '.scss']
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};
