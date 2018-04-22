/**
 * 主页
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { createStore } from 'redux'
import "./index.scss"

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.store = createStore(this.indexReducer)
  }

  indexReducer(state = 0, action) {
    switch (action.type) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  }

  _onClick(type) {
    this.store.dispatch({ type })
    console.log(this.store.getState())
  }

  render() {
    return (
      <div className="wrap">
        <Link to={'/ui'}>组件库</Link>
        <button onClick={() => this._onClick('add')}>加1</button>
        <button onClick={() => this._onClick('sub')}>减1</button>
      </div>
    )
  }
}