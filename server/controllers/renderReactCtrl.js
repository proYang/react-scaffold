const Router = require('koa-router')
const fs = require('fs')
const path = require('path')

const router = new Router({
  prefix: '/'
})

const templatePath = path.resolve(__dirname, '../../dist/index.html')

// support SPA
router.get('/', (ctx) => {
  ctx.type = 'html'
  ctx.body = fs.createReadStream(templatePath)
})

module.exports = router
