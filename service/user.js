const Router = require("koa-router")
const router = new Router()

router.get("/all", async ctx => {
  const list = [
    {
      a: 1,
      b: 2,
      c: 3
    }
  ]
  ctx.body = list
})

module.exports = rootRouter => {
  rootRouter.use("/api/user", router.routes(), router.allowedMethods())
}
