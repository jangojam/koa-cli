const Koa = require('koa')
const app = new Koa()
const router = require('./router/router')
const log = require('./utils/log_utils')
// response
// app.use(ctx => {
//   ctx.response.body = 'Hello Koa!'
// })
// app
//   .use(router.routes())
//   .use(router.allowedMethods())
log.reqLog()
app.listen(8889)