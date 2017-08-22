const path = require('path')

const rootPath = path.resolve(__dirname, '..') // 项目根目录
const src = path.join(rootPath, 'src') // 开发源码目录

module.exports = {
  build: {
    entryPath: path.join(src, 'main.js'),
    indexPath: path.join(src, 'index.html'),
    distPath: path.join(rootPath, 'dist'),
    staticPath: path.join(rootPath, './static'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    entryPath: path.join(src, 'main.js'),
    indexPath: path.join(src, 'index.html'),
    distPath: path.join(rootPath, 'dist'),
    staticPath: path.join(rootPath, './static'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}