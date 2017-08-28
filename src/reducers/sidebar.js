import { TOGGLE_SIDEBAR } from '../actions/sidebar'

const initState = {
  list: [],
  active: false
}

export const sideBarList = (state = initState, action) => {
  switch (action.type) {
  case TOGGLE_SIDEBAR:
    return Object.assign({}, state, {
      active: !state.active
    })
  }
}