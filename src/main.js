/**
 * @desc 入口文件
 */
import React from 'react'
import { render } from 'react-dom'
// import { Router } from 'react-router'
import { Provider } from 'react-redux'

import store from '@/redux/store'
import App from './views/App'
// import routes from '@/routes'
// 将组件挂载
const MOUNT_NODE = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
)
