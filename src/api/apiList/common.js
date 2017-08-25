import api from '../config'

/**
 * @desc 上传资源至七牛云
 * @param {Object} body
 */
export const uploadImage = (body) => {
  return api.post('http://upload.qiniu.com/', body)
}