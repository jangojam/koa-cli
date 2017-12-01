module.exports = {
    login (ctx) {
        ctx.response.body = {
            adm: 'koa2',
            pwd: 1000
        }
    },
    user (ctx) {
        ctx.response.body = {
            name: 'jango',
            age: 1,
            sex: 'man'
        }
    },
    fail (ctx) {
        ctx.throw(500,'丢个错误')
    },
   async  ejs (ctx,next) {
        let title = 'koa and ejs'
       await  ctx.render('template', {title})
    },
    async jade (ctx,next) {
      await  ctx.render('template', {title:'koa and jade'})
    }
}