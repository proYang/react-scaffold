const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const opn = require('opn')
const config = require('./config')
const base = require('./webpack.base.conf')
// favicon = require('express-favicon'),
const devConfig = require('./webpack.dev.conf')
const app = express()

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port

let compiler = webpack(devConfig)
// for highly stable resources
app.use('/static', express.static(config.dev.staticPath))
let uri = 'http://localhost:' + port
// app.use(favicon(path.join(__dirname, '../favicon.ico')))

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    let options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())
// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.dev.assetsPublicPath
}))

app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, '127.0.0.1', function (err) {
    console.log('> Starting dev server...')
    console.log('> Listening at http://127.0.0.1:' + port + '\n')
    err && console.log(err);
    if (autoOpenBrowser) {
        opn(uri)
    }
})