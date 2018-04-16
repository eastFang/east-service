/**
 * 主页
 */
import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

export default class extends React.Component {
  render() {
    return (
      <div class="wrap">
        <img class='pc-img' src='https://img.shop.hisense.com/2018/04/13/1f9f3a36-03c2-475b-8cb7-33c984a6899e.jpg' />
        <img class='m-img' src='https://img.shop.hisense.com/2018/04/13/7d3ab79a-6ce7-4cc9-a782-6527ec6c2c6b.jpg' />
        <Link to={'/about'}>
          去关于我们
        </Link>
        <Link to={'/ui'}>
          去UI组件库
        </Link>
      </div>
    )
  }
}