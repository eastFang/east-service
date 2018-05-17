/**
 * 关于我们
 */
import React from 'react'
import { isPC } from 'util'

export default class extends React.Component {
  render() {
    console.log(isPC())
    return (
      <div>
        关于
      </div>
    )
  }
}