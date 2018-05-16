import React from 'react'
import loadDashboard from 'bundle-loader?lazy!./loadDashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, About, Error, UI } from 'page'
import { Bundle } from 'component'

const Dashboard = () => (
  <Bundle load={loadDashboard}>
    {(Dashboard) => <Dashboard/>}
  </Bundle>
)

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/index.htm']} component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/ui' component={UI}></Route>
        <Route path='dashboard' component={Dashboard}></Route>
        <Route path='*' component={Error}></Route>
      </Switch>
    </Router>
  )
}