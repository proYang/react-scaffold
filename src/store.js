import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { routerMiddleware, routerActions } from 'connected-react-router'
import thunk from 'redux-thunk'

import createRootReducer from './reducers'

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory()

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
    createRootReducer(history),
    compose(
      applyMiddleware(...middlewares)
    ),
  )
}
else {
  store = createStore(
    createRootReducer(history),
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(history))
    })
  }
}


export {
  routerActions,
  store,
  history,
}
