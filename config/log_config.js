var path = require('path')
var errorPath = path.resolve(__dirname, '../log/error/error')
// var reqPath = __dirname + '../log/req/req'
var reqPath = path.resolve(__dirname, '../log/req/req')
// var reqPath ='../log/req'
// var defaultPath = path.resolve(__dirname, '../log/default/default')
 
module.exports = {
    appenders: {
        // ruleConsole: {type: 'category'},
        errorLogger:{
            type: "dateFile",//��־����
            filename: errorPath,             //��־���λ��
            alwaysIncludePattern:true,          //�Ƿ������к�׺��
            pattern: "-yyyy-MM-dd.log"       //��׺��ÿСʱ����һ���µ���־�ļ�
        },
        resLogger:{
            type: "dateFile",//��־����
            filename: reqPath,             //��־���λ��
            alwaysIncludePattern:true,          //�Ƿ������к�׺��
            pattern: "-yyyy-MM-dd.log"       //��׺��ÿСʱ����һ���µ���־�ļ�
        }
        // default:{
        //     type: "dateFile",//��־����
        //     filename: defaultPath,             //��־���λ��
        //     alwaysIncludePattern:true,          //�Ƿ������к�׺��
        //     pattern: "-yyyy-MM-dd-hh-mm.log"       //��׺��ÿСʱ����һ���µ���־�ļ�
        // }
    },
    categories: {
        errorLogger: {appenders:['errorLogger'],level:'error'},
        resLogger: {appenders:['resLogger'],level:'info'},
        default: {appenders:['resLogger','errorLogger'],level:'info'}
    }
}