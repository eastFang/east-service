const mysql = require("mysql")
const config = require("./config")

const getConnection = () => {
  return mysql.createConnection(config.database)
}

/**
 * 查询
 * @param {sql语句} sql 
 */
const query = (sql, params) => {
  const connection = getConnection()
  connection.connect()

  return new Promise((resolve, reject) => {
    connection.query(sql, params, (error, results, fields) => {
      if (error) {
        reject(error)
        return
      }
      resolve(results)
      connection.end()
    })
  })
}

/**
 * 添加
 */
const insert = query

module.exports = {
  query,
  insert
}