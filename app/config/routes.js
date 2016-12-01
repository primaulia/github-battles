import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from '../components/main'
import Home from '../components/home'
import PromptContainer from '../containers/PromptContainer'

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/playerOne' header='Player One' component={PromptContainer} />
      <Route path='/playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
    </Route>
  </Router>
)

export default routes
