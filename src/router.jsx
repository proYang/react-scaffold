import React from 'react'
import { Route,  } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from './store'

import Home from './containers/Home/index'
// import Container from './containers/Container'
import Details from './containers/Details/index'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
          <div>
            <Route path="/index" component={Home} />
            <Route path="/theme/:id" component={Home} />
            <Route path="/detail/:id" component={Details} />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}