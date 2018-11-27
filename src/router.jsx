import React from 'react'
import { Route, Switch } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { hot } from 'react-hot-loader'
import { store, history } from './store'

// 按路由拆分代码
// https://segmentfault.com/a/1190000012545692
import Loadable from 'react-loadable'
import Loading from './components/Loading/index'


const Home = Loadable({
  loader: () => import('./containers/Home/index'),
  loading: Loading
})
const Details = Loadable({
  loader: () => import('./containers/Details/index'),
  loading: Loading
})
// import Home from './containers/Home/index'
// import Container from './containers/Container'
// import Details from './containers/Details/index'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/theme/:id" component={Home} />
              <Route path="/detail/:id" component={Details} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default hot(module)(App)
