/**
 * 错误处理页面，友好提示
 */
import React from 'react'
import { isPC } from 'util'

export default class extends React.Component {
  render() {
    console.log(isPC())
    return (
      <div>错误页面</div>
    )
  }
}