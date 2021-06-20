/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 12:07:02
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-20 13:40:35
 * @Description: file content
 */

const figlet = require('figlet')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

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
      console.log(chalk.blue(data))
      resolve(data)
    }, duration)
  })
})

/**
 * 创建项目目录
 * @param {String} name
 * @returns {Promise}
 */
const createDir = (name) => new Promise((resolve, rejetc) => {
  fs.mkdir(path.join(process.cwd(), name), { recursive: true }, (err) => {
    if (err) rejetc(err)
    resolve()
  })
})

/**
 * 检测地址是否存在
 * @param {String} checkPath
 *  @returns {Promise}
 */
const checkExit = (checkPath) => new Promise((resolve) => {
  fs.stat(checkPath, (err) => {
    if (err) resolve(false)
    resolve(true)
  })
})

module.exports = {
  getPromptModules,
  printCliName,
  createDir,
  checkExit,
}
