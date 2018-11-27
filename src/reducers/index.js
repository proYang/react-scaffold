import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import modal from './modal'
import sidebar from './sidebar'

export default (history) => combineReducers({
  router: connectRouter(history),
  modal,
  sidebar,
})
