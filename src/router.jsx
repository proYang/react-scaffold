import React from 'react'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from './store'
import Home from './containers/Home/index'

export default (
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={Home}></Route>
        <Route path="detail/:id" component={Home}></Route>
      </div>
    </ConnectedRouter>
  </Provider>

)