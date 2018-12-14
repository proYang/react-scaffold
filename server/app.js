const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const staticMiddleware = require('koa-static')
const path = require('path')

const app = new Koa()


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

const distPath = path.resolve(__dirname, '../dist')
const staticPath = path.resolve(__dirname, '../static')
// const errorHandler = require('./middleware/errorHandler')
// middlewares
app.use(staticMiddleware(distPath))
app.use(staticMiddleware(staticPath))
app.use(bodyParser())
// app.use(errorHandler)

// routes
require('./routes')(app)

app.listen(3000, ()=> {
  console.log('♪ App Started')
})

