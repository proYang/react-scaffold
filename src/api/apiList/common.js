import api from '../config'

/**
 * @desc 主题日报列表
 * @param {Object} body
 */
export const fetchThemeList = () => {
  return api.get('/api/4/themes')
}

/**
 * @desc 主题日报内容查看
 * @param {Object} body
 */
export const fetchThemeContent = (id) => {
  return api.get(`/api/4/theme/${id}`)
}