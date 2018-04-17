const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')
const HappyPack = require("happypack")
const path = require("path")

module.exports = {
  entry: "./app",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "html/index.html",
      template: "./app/index.html"
    }),
    new ModuleConcatenationPlugin(),
    new HappyPack({
      id: "babel",
      cache: false,
      loaders: [{
        loader: "babel-loader",
        options: {
          presets: [
            "es2015",
            "react",
            "stage-3",
          ]
        }
      }],
    }),
  ],
  module: {
    rules: [{
      test: /\.(jsx|js|es6)$/,
      exclude: /node_modules/,
      include: path.resolve(__dirname, "./app"),
      loader: "happypack/loader?id=babel",
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
  },
  resolve: {
    alias: {
      component: path.resolve(__dirname, './app/component'),
      page: path.resolve(__dirname, './app/page'),
      util: path.resolve(__dirname, './app/util'),
    }
  },
}