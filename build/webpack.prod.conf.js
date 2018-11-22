const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const config = require('./config')
const utils = require('./utils')
const baseConfig = require('./webpack.base.conf')

const rootPath = config.build.rootPath // 项目根目录
const src = config.build.src // 开发源码目录

let webpackConfig = merge(baseConfig, {

  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader', 'eslint-loader'],
        include: src,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: config.build.minClassName,
              getLocalIdent: (context, localIdentName, localName) => {
                return utils.generateScopedName(localName, context.resourcePath);
              },
              minimize: true
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },

  devtool: config.build.productionSourceMap ? 'eval-source-map' : false,

  output: {
    path: config.build.distPath,
    publicPath: config.build.assetsPublicPath,
    chunkFilename: 'js/[id].[chunkhash].js',
    filename: 'js/[name].[chunkhash].js'
  },

  optimization: {
    splitChunks: {
    	chunks: "all",
    	maxInitialRequests: 20, // for HTTP2
    	maxAsyncRequests: 20, // for HTTP2
    	minSize: 40 // for example only: chosen to match 2 modules
    	// omit minSize in real use case to use the default of 30kb
    },
  	minimizer: [
  		new UglifyJsPlugin({
  			cache: true,
  			parallel: true,
  			sourceMap: true // set to true if you want JS source maps
  		}),
  		new OptimizeCSSAssetsPlugin({})
  	]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(), //Scope Hoisting
    new CopyWebpackPlugin([ // 复制静态资源
      {
        context: config.build.assetsSubDirectory,
        from: '**/*'
      }
    ]),
    // extract css into its own file
    new MiniCssExtractPlugin({
    	// Options similar to the same options in webpackOptions.output
    	// both options are optional
    	filename: "[name].[hash].css",
    	chunkFilename: "[id].[hash].css"
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: config.build.indexPath,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 10000
    })
  ]
})

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
