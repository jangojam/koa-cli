const Router = require('koa-router')
const router = new Router()
const user = require('../controller/user')

router.get('/', user.login)
router.get('/user', user.user)
router.get('/fail', user.fail)
router.get('/ejs', user.ejs)
// router.get('/jade', user.jade)
router.get('/jade', async  (ctx,next) => {
      await  ctx.render('template', {title:'koa and jade'})
    })

module.exports = router