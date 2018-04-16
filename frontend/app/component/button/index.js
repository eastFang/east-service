import React from "react"
import "./index.scss"
import { combineReducers, createStore } from 'redux'

export default class extends React.Component {
  componentWillMount() {
    const reducer = combineReducers({
      reducer1: this.reducer1,
      reducer2: this.reducer2
    })
    this.store = createStore(reducer)
  }

  reducer1(state = {}, action) {
    switch (action.type) {
      case "ADD_REDUCER_1":
        return Object.assign({}, state.reducer1, action.payload)
      default:
        return state
    }
  }

  reducer2(state = {}, action) {
    switch (action.type) {
      case "ADD_REDUCER_2":
        return Object.assign({}, state.reducer2, action.payload)
      default:
        return state
    }
  }

  _onclick() {
    this.store.dispatch({
      type: "ADD_REDUCER_1",
      payload: {
        count: "reducer 1 1"
      }
    })
    this.store.dispatch({
      type: "ADD_REDUCER_2",
      payload: {
        count: "reducer 2 1"
      }
    })
    console.log(this.store.getState())
  }

  render() {
    return <div class="btn-ui" onClick={this._onclick.bind(this)}>button</div>
  }
}