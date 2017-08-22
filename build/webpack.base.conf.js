const path = require('path')
const webpack = require('webpack')
const config = require('./config')

const env = process.env.NODE_ENV.trim() // 当前环境

const rootPath = path.resolve(__dirname, '..') // 项目根目录
const src = path.join(rootPath, 'src') // 开发源码目录

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
    alias: {
      '@': src
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: ['react-hot-loader', 'babel-loader', 'eslint-loader'],
        include: src,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { // 这是给 React / Redux 打包用的
        NODE_ENV: JSON.stringify('production')
      },
      // ================================
      // 配置开发全局常量
      // ================================
      __DEV__: env === 'development',
      __PROD__: env === 'production',
      __COMPONENT_DEVTOOLS__: false, // 是否使用组件形式的 Redux DevTools
      __WHY_DID_YOU_UPDATE__: false // 是否检测不必要的组件重渲染
    })
  ]
}