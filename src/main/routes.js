import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
