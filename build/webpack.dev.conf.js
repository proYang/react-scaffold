const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./config')
const baseConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const rootPath = config.dev.rootPath // 项目根目录
const src = config.dev.src // 开发源码目录

// add hot-reload related code to entry chunks
Object.keys(baseConfig.entry).forEach(function (name) {
  baseConfig.entry[name] = ['./build/dev-client'].concat(baseConfig.entry[name])
})

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader?cacheDirectory=true', 'eslint-loader'],
        include: src,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: config.dev.minClassName
            }
          },
          'postcss-loader', 'less-loader']
      }
    ]
  },

  devtool: config.dev.cssSourceMap ? 'eval-source-map' : false,

  output: {
    path: config.dev.distPath,
    publicPath: config.dev.assetsPublicPath,
    filename: '[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: config.dev.indexPath,
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]

})