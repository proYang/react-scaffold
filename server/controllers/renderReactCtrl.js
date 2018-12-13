const Router = require('koa-router')
const fs = require('fs')
const path = require('path')

const router = new Router({
  prefix: '/'
})

const templatePath = path.resolve(__dirname, '../../dist/index.html')

router.get('/', (ctx) => {
  ctx.response.type = 'html'
  ctx.body = fs.createReadStream(templatePath)
})

module.exports = router
