import { TOGGLE_SIDEBAR, UPDATE_THEMT_LIST } from '../actions/sidebar'

const initState = {
  list: [],
  active: false
}

export default function (state = initState, action) {
  switch (action.type) {
  case TOGGLE_SIDEBAR:
    return Object.assign({}, state, {
      active: !state.active
    })
  case UPDATE_THEMT_LIST:
    return Object.assign({}, state, {
      list: action.data
    })
  default:
    return state
  }
}