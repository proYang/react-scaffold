/**
 * @desc 入口文件
 */
import { render } from 'react-dom'
import Router from './router'

// 将组件挂载
const MOUNT_NODE = document.getElementById('app')
render(
  Router,
  MOUNT_NODE
)
