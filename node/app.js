// 使用koa2进行加载静态资源 使用这个
const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const app = new Koa()

//设置静态资源的路径
const staticPath = '../dist'

app.use(static(
  path.join( __dirname,  staticPath)
))

app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})

app.listen(9001, () => {
  console.log('server is starting at port 9001')
})