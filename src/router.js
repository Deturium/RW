import React from 'react'
import { Router, Route, Switch } from 'dva/router'

import Rw from './pages/Rw/Rw'
import LogIn from './pages/LogIn/LogIn'


export default ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/" component={Rw} />
      </Switch>
    </Router>
  )
}
