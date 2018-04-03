const Koa = require("koa")
const cors = require("koa-cors")
const app = new Koa()
const router = require("./service/index")

app.use(cors({
  origin: "*"
}))

app.use(router.routes()).use(router.allowedMethods())

app.listen(8888, function() {
  console.log("listen 8888")
})