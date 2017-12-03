const Koa = require('koa')
const app = new Koa()
const router = require('./router/router')
const logUtil = require('./utils/log_utils')
const compose = require('koa-compose')
const staticServer = require('koa-static')
const path = require('path')
// const ejsViews = require('koa-ejs')
const jadeViews = require('koa-pug')

app.use(staticServer(path.join(__dirname,'public')))
// ejsViews(app,{
//     root: path.join(__dirname, 'views/ejs'),
//     layout: false,
//     viewExt: 'html',
//     cache: false,
//     debug: true
// })
var jadeviews = new jadeViews({
    viewPath: path.join(__dirname, 'views/jade'),
    debug: false,
    pretty: false,
    compileDebug: false,
    // locals: global_locals_for_all_pages,
    // basedir: path.join(__dirname, 'views/jade'),
    // helperPath: [],
    app: app // equals to pug.use(app) and app.use(pug.middleware)
  })

// response
app.use(async (ctx, next)=> {
  try {
      await next()
      logUtil.reqLog(ctx)
  }
  catch (err) {
      logUtil.errorLog(ctx,err)
  }
})
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8889)