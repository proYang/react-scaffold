import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import modal from './modal'
import sidebar from './sidebar'

export default combineReducers({
  modal,
  sidebar,
  routing: routerReducer
})