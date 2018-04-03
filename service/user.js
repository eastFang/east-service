const Router = require("koa-router")
const router = new Router()
const baseAPI = "/api/user"
const { query } = require("../database-operation")

router.get("/all", async ctx => {

  const list = await query("select * from user")

  ctx.body = JSON.stringify(list)
  
})

module.exports = (outRouter) => {
  outRouter.use(baseAPI, router.routes(), router.allowedMethods())
}
