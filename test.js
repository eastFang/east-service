const Koa = require("koa")
const app = new Koa()


app.use(async (ctx, next) => {
  const start = Date.now()
  app.context.aa = 1
  console.log("1前")
  await next()
  console.log("1后")
})

app.use(async (ctx, next) => {
  console.log(`2前${ctx.aa}`)
  await next()
  console.log("2后")
})

app.use(async ctx => {
  console.log("3前")
  ctx.body = "Hello World"
})

app.listen(3000, function() {
  console.log("我在监听3000端口")
  console.log(app.env)
})

app.listen(3001, function() {
  console.log(`我在监听3001端口${app.context.aa}`)
})