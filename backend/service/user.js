const Router = require("koa-router")
const router = new Router()
const baseAPI = "/api/user"
const { query, insert } = require("../database-operation")
const { sqlParamFormat } = require("../util")

router.get("/all", async ctx => {
  const { id, name } = ctx.request.query
  const list = await query(`select * from user where 1 = 1 ${sqlParamFormat({ id, name })}`, [id, name])

  ctx.body = list
  
})

router.post("/add", async ctx => {
  const { name, password } = ctx.request.body
  if (!name || !password) {
    console.error(`${baseAPI}/add 检查参数: name, password`)
    return
  }
  try {
    await insert('insert into user set ?', { name, password })
  } catch (error) {
    console.log(error)
  }
})

module.exports = (outRouter) => {
  outRouter.use(baseAPI, router.routes(), router.allowedMethods())
}
