const log4js = require('log4js')
const log4jd_conif = require('../config/log_config')

log4js.configure(log4jd_conif)
var errorlogger = log4js.getLogger('errorLogger')
var reqlogger = log4js.getLogger('resLogger')

var logUtil = {}
logUtil.errorLog = function (ctx,err) {
    var method = ctx.request.method
    var logText = ''
    logText += '\n'+'-------------------------------------------------error log start---------------------------------------------------'+'\n'
    // 请求部分
    // logText += 'request.header: ' + ctx.request.header + '\n'
    logText += 'request.method: ' + ctx.request.method + '\n'
    logText += 'request.originalUrl: ' + ctx.request.originalUrl +  '\n'
    logText += 'request.ip: ' + ctx.request.ip + '\n'
    if (method === 'GET') {
        logText += "request query:  " + JSON.stringify(ctx.request.query) + "\n";
    } else {
        logText += "request body: " + "\n" + JSON.stringify(ctx.request.body) + "\n";
    }
    // 错误信息
    logText += "err name: " + err.name + "\n"
    logText += "err message: " + err.message + "\n"
    logText += "err stack: " + err.stack + "\n"

    //错误信息结束
    logText += "-------------------------------------------------error log end---------------------------------------------------" + "\n"

    errorlogger.error(logText)
}
logUtil.reqLog = function (ctx) {
    var method = ctx.request.method
    var logText = ''
    logText += '\n'+'-------------------------------------------------req log start---------------------------------------------------'+'\n'
    // 请求部分
    // logText += 'request.header: ' + ctx.request.header + '\n'
    logText += 'request.method: ' + ctx.request.method + '\n'
    logText += 'request.originalUrl: ' + ctx.request.originalUrl +  '\n'
    logText += 'request.ip=' + ctx.request.ip + '\n'
    if (method === 'GET') {
        logText += "request query:  " + JSON.stringify(ctx.request.query) + "\n"
    } else {
        logText += "request body: " + "\n" + JSON.stringify(ctx.request.body) + "\n"
    }
    // 响应部分
    logText += "response status: " + ctx.response.status + "\n"
    logText += "response body: " + "\n" + JSON.stringify(ctx.response.body) + "\n"
    logText += "-------------------------------------------------req log end---------------------------------------------------" + "\n"
    reqlogger.info(logText)
 }
module.exports = logUtil