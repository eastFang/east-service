const path = require("path")

const sqlParamFormat = (params) => {
  const paramsKeyArr = []
  const paramsValueArr = Object.values(params)
  const simplifyArrResult = simplifyArr(paramsValueArr)

  if (simplifyArrResult.length === 0) return ""

  for (let item in params) {
    if (params[item]) {
      paramsKeyArr.push(`and ${item} = ?`)
    }
  }

  return paramsKeyArr.join(" ")
}

const simplifyArr = (originArr) => {
  const result = []
  originArr.forEach(item => {
    if (item) {
      result.push(item)
    }
  })
  return result
}

const getAbsoluteHtmlPath = (htmlPath) => {
  return path.resolve(__dirname, `../frontend/dist/html/${htmlPath}`)
}

module.exports = {
  sqlParamFormat,
  getAbsoluteHtmlPath
}