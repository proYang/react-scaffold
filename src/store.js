import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerActions } from 'react-router-redux'
import thunk from 'redux-thunk'

import reducers from './reducers' // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const composeEnhancers = composeWithDevTools({
// Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

// Build the middleware for intercepting and dispatching navigation actions
const middlewares = [
  thunk,
  routerMiddleware(history)
]

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
let store
if (process.env.NODE_ENV === 'production') {
  store = createStore(
    reducers,
    applyMiddleware(...middlewares),
  )
}
else {
  store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducers = require('./reducers').default
      store.replaceReducer(nextReducers)
    })
  }
}


export {
  routerActions,
  store,
  history,
}
