const Koa = require("koa")
const Router = require("koa-router")
const router = new Router()

const cheerio = require("cheerio")
const fs = require("fs")
const path = require("path")
const Promise = require("bluebird")
const readFileAsync = Promise.promisify(fs.readFile)
const { getAbsoluteHtmlPath } = require("../util")

async function loadHtml(path) {
  try {
    let content = await readFileAsync(path)
    return cheerio.load(content)
  } catch (e) {
    console.log(e)
    return false
  }
}

/**
 * 单页应用（/*）子路由都走index.html
 */
router.get("/*", async (ctx, next) => {
  const lastPointIndex = ctx.path.lastIndexOf(".")
  const excludeResource = ["js", "css"]
  if (ctx.path.indexOf("/api") === -1 // 排除请求api
  && !excludeResource.includes(lastPointIndex) // 排除请求js、css静态资源
  ) {
    const $html = await loadHtml(path.resolve(__dirname, getAbsoluteHtmlPath("/index.html")))
    if (!$html) return ctx.body = null
    ctx.body = $html.html()
  }
  await next()
})

require("./user")(router)

module.exports = router