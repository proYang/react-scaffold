const glob = require('glob')
const promiseify = require('util').promisify
const globAsync = promiseify(glob)
const path = require('path')


/**
 * @desc controller 目录
 */
const ctrlGlob = path.resolve(__dirname, './controllers/**/*.js')

module.exports = async function(app) {

  const files = await globAsync(ctrlGlob, {
    nodir: true
  })
  files.forEach(async (file) => {
    const r = await require(file)
    app.use(r.routes())
    app.use(r.allowedMethods())
  })

}
