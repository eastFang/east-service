const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  entry: "./app/index.jsx",
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
      test: /\.(jsx)$/,
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
    }]
  }
}