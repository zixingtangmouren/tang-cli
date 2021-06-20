/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 12:07:02
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-20 22:47:40
 * @Description: file content
 */

const figlet = require('figlet')
const logger = require('./logger')

const CLI_NAME = 'TANG CLI'

/**
 * 获取对应功能模板prompt
 * @param {String[]} features
 */
const getPromptModules = (features) => features.map((feature) => require(`../promptModules/${feature}`))

/**
 * 打印脚手架title
 * @param {Number} duration
 * @returns {Promise}
 */
const printCliName = (duration = 100) => new Promise((resolve, reject) => {
  setTimeout(() => {
    figlet(CLI_NAME, (err, data) => {
      if (err) {
        reject(err)
        return
      }

      logger.success(data)
      resolve(data)
    }, duration)
  })
})

module.exports = {
  getPromptModules,
  printCliName,

}
