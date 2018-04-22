import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Router from './router'
import Reducer from './reducer'
import { Provider } from 'react-redux'
import './index.scss'

const store = createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)