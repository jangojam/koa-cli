const Koa = require('koa')
const app = new Koa()
const router = require('./router/router')
const logUtil = require('./utils/log_utils')
const compose = require('koa-compose')
const staticServer = require('koa-static')
const path = require('path')
const views = require('koa-views')

app.use(staticServer(path.join(__dirname,'public')))
// app.use(views(__dirname + '/views/ejs',{
//     extension: 'ejs'
// }))
app.use(views(__dirname + '/views/jade',{
    // extension: 'jade'
        // engine:'jade'
        // map:{
        //     html:'jade'
        // }
    extension: 'pug'
}))
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