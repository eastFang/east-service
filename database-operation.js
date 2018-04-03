const mysql = require("mysql")
const config = require("./config")

/** 查询
 * 
 * @param {sql语句} sql 
 */
const query = (sql) => {
  const connection = mysql.createConnection(config.database)

  connection.connect()

  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results, fields) => {
      if (error) {
        console.log(error)
        reject(error)
        return
      }
      resolve(results)
      connection.end()
    })
  })
}

module.exports = {
  query
}