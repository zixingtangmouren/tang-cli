/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 12:07:02
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-22 19:10:41
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

/**
 * 获取类型
 * @param {*} value
 * @returns {String}
 */
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1)

/**
 * 简单的merge
 * @param {Object} target
 * @param {Object} source
 */
const merge = (target, source) => {
  Object.keys(source).forEach((key) => {
    const tValType = getType(target[key])
    const sValType = getType(source[key])

    if ((tValType === sValType) && sValType === 'Object') {
      merge(target[key], source[key])
      return
    }

    if ((tValType === sValType) && sValType === 'Array') {
      target[key] = target[key].concat(source[key])
      return
    }

    target[key] = source[key]
  })
}

/**
 * 检测是否符合node版本
 * @param {String} needVersion
 * @returns {Boolean}
 */
const checkNodeVersion = (needVersion) => {
  const need = parseInt(needVersion.split('.').map((v) => v.padStart(2, '0')).join(''))
  const current = parseInt(process.version.slice(1).split('.').map((v) => v.padStart(2, '0')).join(''))
  return need <= current
}

module.exports = {
  getPromptModules,
  printCliName,
  getType,
  merge,
  checkNodeVersion,
}
