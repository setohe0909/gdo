import React from 'react'

import * as routes from './constants/routes'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import MainContainer from './components/main'
import NotFound from './components/NotFound'
import MainLayout from './layout'

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path={routes.MAIN} component={MainContainer} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    </Router>
  )
}

export default App
