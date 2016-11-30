import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Main from '../components/main'
import Home from '../components/home'

var routes = (
  <Router>
    <Route path='/' component={Main}>
      <IndexRoute component={Main} />
      <Route path='/home' component={Home} />
    </Route>
  </Router>
)

export default routes
