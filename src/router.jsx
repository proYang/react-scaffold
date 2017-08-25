import React from 'react'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from './store'
import Home from './containers/home'

export default (
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <Route path="/" component={Home}>
      </Route>
    </ConnectedRouter>
  </Provider>

)