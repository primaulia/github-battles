import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from '../components/main'
import Home from '../components/home'
import PromptContainer from '../containers/PromptContainer'
import BattleContainer from '../containers/BattleContainer'
import ResultsContainer from '../containers/ResultsContainer'

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/playerOne' header='Player One' component={PromptContainer} />
      <Route path='/playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='/battle' header='Confirm Battle' component={BattleContainer} />
      <Route path='/results' header='Game over!' component={ResultsContainer} />
    </Route>
  </Router>
)

export default routes
