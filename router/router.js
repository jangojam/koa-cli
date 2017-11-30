const Router = require('koa-router')
const router = new Router()
const user = require('../controller/user')
router.get('/', user.login)
router.get('/user', user.user)
module.exports = router