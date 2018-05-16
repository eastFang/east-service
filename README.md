# 服务端 backend
koa, koa-cors, koa-router, mysql

# 前端 fronend
webpack
react
react-router: v4, only react-router-dom 用于web
redux react-redux
## 打包优化
optimization.splitChunks引入，将node_modules里面的库全部打包到base.js里面；将两个以上js引入相同部分的模块打包到common.js

# 本地开发 - 项目启动
npm run dev-watch

npm run dev-start

添加opn模块，自动打开浏览器

# 部署服务器
npm run prod-nowatch

npm run prod-start