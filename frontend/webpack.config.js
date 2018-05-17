const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')
const webpack = require("webpack")
const path = require("path")

module.exports = {
  entry: {
    main: "./app/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js"
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "async",
  //     cacheGroups: {
  //       common: {
  //         name: "common",
  //         chunks: "initial",
  //         minChunks: 2,
  //       },
  //       base: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "base",
  //         chunks: "all",
  //       },
  //       default: false,
  //     }
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./app/index.html"
    }),
    new ModuleConcatenationPlugin(),
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
            "react",
            "stage-3",
          ],
          plugins: [
            "syntax-dynamic-import",
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
  },
  resolve: {
    alias: {
      component: path.resolve(__dirname, './app/component'),
      page: path.resolve(__dirname, './app/page'),
      util: path.resolve(__dirname, './app/util'),
    }
  },
}