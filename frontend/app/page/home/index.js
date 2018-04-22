/**
 * 主页
 */
import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

export default class extends React.Component {

  render() {
    return (
      <div className="wrap">
        <Link to={'/ui'}>组件库</Link>
      </div>
    )
  }
}