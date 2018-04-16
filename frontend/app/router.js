import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, About, Error, UI } from 'page'

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/ui' component={UI}></Route>
        <Route path='*' component={Error}></Route>
      </Switch>
    </Router>
  )
}