/**
 * @desc 入口文件
 */
import React from 'react'
import { render } from 'react-dom'
import FastClick from 'fastclick'
import App from './router'
import '@/assets/style/reset.css'

FastClick.attach(document.body)

// 将组件挂载
const MOUNT_NODE = document.getElementById('app')
render(
  <App />,
  MOUNT_NODE
)
