//导入action常量
import {UPDATE_MODAL} from '../actions/modal'

//init state
const INIT_STATE = {
  'loading': false
}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
  case UPDATE_MODAL:
    return Object.assign({}, state, action.data)
  default:
    return state
  }
}