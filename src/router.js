import React from 'react'
import { Router, Route, Switch } from 'dva/router'

import Home from './pages/Home/Home'
import LogIn from './pages/LogIn/LogIn'


export default ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LogIn} />
        {/* <Route path="/register" component={Register} /> */}
      </Switch>
    </Router>
  )
}
