
module.exports = async (ctx, next) => {
  next()
  switch (ctx.status) {
  case 404:
    break
  }
}
