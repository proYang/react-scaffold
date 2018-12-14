const Router = require('koa-router')

const router = new Router({
  prefix: '/api/3/'
})

router.get('/news/hot', (ctx, next) => {
  const res = {
    msg: 'hello',
    success: true,
    data: {
      name: 'jack345'
    }
  }
  ctx.body = res
})

module.exports = router

