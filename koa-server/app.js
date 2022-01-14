// 1.创建koa对象
const Koa = require('koa')
const app = new Koa()
// 2.编写响应函数(中间件)
// ctx:上下文,web容器,ctx.request ctx.response
// next: 下一个中间件,下一层中间件是否能够得到执行, 取决于next这个函数有没有被调用
const respDurationMiddleware = require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)
// 3.绑定端口号 9999
app.listen(9999)