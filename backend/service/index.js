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

router.get("/", async ctx => {
  const $html = await loadHtml(path.resolve(__dirname, getAbsoluteHtmlPath("/index.html")))
  if (!$html) return ctx.body = null
  ctx.body = $html.html()
})

require("./user")(router)

module.exports = router