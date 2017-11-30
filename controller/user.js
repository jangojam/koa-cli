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
    }

}