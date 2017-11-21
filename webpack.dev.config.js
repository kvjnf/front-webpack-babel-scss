const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseSassConfig = require('./webpack.sass.config.js');
const baseEsConfig = require('./webpack.es.config.js');

const config = [
  merge(baseSassConfig, {
    devtool: 'inline-source-map'
  }),
  merge(baseEsConfig, {
   devtool: 'inline-source-map'
 })
]

module.exports = config;