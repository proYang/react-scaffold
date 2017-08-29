/**
 * @desc 入口文件
 */
import React from 'react'
import { render } from 'react-dom'
import App from './router'
import { AppContainer } from 'react-hot-loader'
import '@/assets/style/reset.css'

// 将组件挂载
const MOUNT_NODE = document.getElementById('app')
render(
  <AppContainer>
    <App />
  </AppContainer>,
  MOUNT_NODE
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router', () => {
    const NextApp = require('./router').default
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      MOUNT_NODE
    )
  })
}