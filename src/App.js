import React from 'react'

import * as routes from './constants/routes'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/index'
import Footerone from './components/footer/index'

// Components
import MainContainer from './components/main'
import NotFound from './components/NotFound'
import MainLayout from './layout'

const App = () => {
  return (
    <Router>
      <Header/>
      <MainLayout>
        <Switch>
          <Route exact path={routes.MAIN} component={MainContainer} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
      <Footerone/>
    </Router>
  )
}

export default App
