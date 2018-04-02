const Router = require("koa-router")
const Koa = require("koa")
const app = new Koa()
const router = new Router()

require("./user")(router)

module.exports = router