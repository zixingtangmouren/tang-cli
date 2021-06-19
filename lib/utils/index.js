/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 12:07:02
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 12:25:53
 * @Description: file content
 */

/**
 * 获取功能模板
 * @param {String[]} features
 */
const getPromptModules = (features) => features.map((feature) => require(`../promptModules/${feature}`))

module.exports = {
  getPromptModules,
}
