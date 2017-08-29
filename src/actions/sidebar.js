import api from '../api'
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const FETCH_THEMT_LIST = 'FETCH_THEMT_LIST'
export const UPDATE_THEMT_LIST = 'UPDATE_THEMT_LIST'

/**
 * @desc 同步Action
 */
export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR
  }
}
export function updateThemeList(data) {
  return {
    type: UPDATE_THEMT_LIST,
    data: data
  }
}

/**
 * @desc 异步Action
 */
export function fetchThemeList() {
  return function (dispatch) {
    api.fetchThemeList().then(function (res) {
      dispatch(updateThemeList(res.others))
    })
  }
}