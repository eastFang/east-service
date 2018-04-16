import React from 'react'
import './index.scss'

export default class extends React.Component {

  getExtraClass() {
    const { type, size, className } = this.props
    return [
      type ? `btn-bg-${type}` : null,
      size ? `btn-size-${size}` : null,
      className || null,
    ].join(' ')
  }

  render() {
    const { type, size, className, ...others } = this.props

    return <button className={`ui-btn ${this.getExtraClass()}`} {...others}>button</button>
  }
}