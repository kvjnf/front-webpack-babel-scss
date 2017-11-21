const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require("autoprefixer");
const baseSassConfig = require('./webpack.sass.config.js');
const baseEsConfig = require('./webpack.es.config.js');

const config = [
  merge.smart(baseSassConfig, {
    module: {
      rules: [{
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true }
            },
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
      }]
    }
  }),
  merge(baseEsConfig, {
   devtool: 'inline-source-map'
 })
]

console.log(require('util').inspect(config, { depth: null }));

module.exports = config;