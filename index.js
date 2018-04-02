const Koa = require("koa")
const app = new Koa()
const router = require("./service/index")

app.use(router.routes()).use(router.allowedMethods())

app.listen(8888, function() {
  console.log("listen 8888")
})