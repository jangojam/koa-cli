const log4js = require('log4js')
const log4jd_conif = require('../config/log_config')

log4js.configure(log4jd_conif)
var errorlogger = log4js.getLogger('errorLogger')
var reqlogger = log4js.getLogger('resLogger')

var logUtil = {}
logUtil.errorLog = function () {
    errorlogger.error('你搞出问题了')
}
logUtil.reqLog = function () {
    reqlogger.info('你请求了')
}
module.exports = logUtil