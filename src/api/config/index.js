/**
 * @description 网络请求框架封装
 */
import Axios from 'axios'
import QS from 'querystring'

Axios.defaults.baseURL = '/'

// TODO 设置超时时间
Axios.defaults.timeout = 10000

Axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
}

//  http code 校验
Axios.defaults.validateStatus = function (status) {
  return status >= 100 && status < 400
}

//  GET 请求 params 序列化
Axios.defaults.paramsSerializer = function (params) {
  return QS.stringify(params)
}

//  设置POST等请求 body 序列化
Axios.defaults.transformRequest = [function (body) {
  let data = body || {}
  if (body instanceof window.FormData) {
    return body
  }
  return JSON.stringify(data)
}]

//  设置统一请求拦截
Axios.interceptors.response.use(response => {
  return Promise.resolve(response.data)
}, error => {
  return Promise.reject(error)
})

/**
 * @description 统一 GET 请求
 * @param url
 * @param params --> GET 请求参数（***?name=Jack&age=25）
 */
function get(url, params, option) {
  if (option) {
    for (var property in option) {
      Axios.defaults[property] = option[property]
    }
  }
  return new Promise((resolve, reject) => {
    Axios.get(url, { params: params })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * @description 统一 POST 请求
 * @param url
 * @param body --> POST 请求 data
 */
function post(url, body, option) {
  if (option) {
    for (var property in option) {
      Axios.defaults[property] = option[property]
    }
  }
  return new Promise((resolve, reject) => {
    Axios.post(url, body)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default {
  get: get,
  post: post
}
