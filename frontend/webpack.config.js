const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  entry: "./app",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/index_bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "html/index.html",
      template: "./app/index.html"
    })
  ],
  module: {
    rules: [{
      test: /\.(jsx|js|es6)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "es2015",
            "react"
          ]
        }
      }
    }, {
      test: /\.(scss)$/,
      exclude: /node_modules/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }]
  }
}