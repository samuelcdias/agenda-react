import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

import About from '../views/About'
import Contacts from '../views/Contacts'
import RegisterContacts from '../views/RegisterContacts'
import Provider from '../Components/Provider'

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Provider>
          <Route exact path="/contacts" component={Contacts} />
          <Route path="/contacts/register" component={RegisterContacts} />
          <Route path="/about" component={About} />
        </Provider>
      </Switch>
    </HashRouter>
  )
}

export default Routes
