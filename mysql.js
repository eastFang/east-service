const Koa = require("koa")
const app = new Koa()
const mysql = require("mysql")
const config = require("./config")

const connection = mysql.createConnection(config.mysqlConfig)

connection.connect()

connection.query("select * from user", function(error, results, fields) {
  if (error) {
    console.log(error)
  }
  console.log(JSON.stringify(results))
})