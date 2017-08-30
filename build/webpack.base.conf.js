const path = require('path')
const webpack = require('webpack')

const config = require('./config')

const rootPath = config.build.rootPath // 项目根目录
const src = config.build.src // 开发源码目录
const node_modules = path.join(rootPath, 'node_modules') //模块库地址

module.exports = {
  entry: {
    app: config.dev.entryPath
  },
  output: {
    path: config.dev.distPath,
    publicPath: config.dev.assetsSubDirectory
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [src, node_modules],
    alias: {
      '@': src
    }
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10240, // 10KB 以下使用 base64
          name: 'img/[name]-[hash:6].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]'
      }
    ]
  }
}