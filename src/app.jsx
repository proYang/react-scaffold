/**
 * @desc 入口文件
 */
import React from 'react'
import { render } from 'react-dom'
import App from './router'
import '@/assets/style/reset.css'

// 将组件挂载
const MOUNT_NODE = document.getElementById('app')
render(
  <App />,
  MOUNT_NODE
)
