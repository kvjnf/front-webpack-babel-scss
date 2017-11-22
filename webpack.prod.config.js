const merge = require('webpack-merge');
const webpack = require("webpack");

const baseSassConfig = require('./webpack.sass.config.js');
const baseEsConfig = require('./webpack.es.config.js');

const config = [
  merge(baseSassConfig, {
    devtool: false
  }),
  merge(baseEsConfig, {
    devtool: false,
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  })
]

module.exports = config;
