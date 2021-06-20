/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:36:19
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-20 23:31:24
 * @Description: file content
 */

const fs = require('fs')
const path = require('path')

/**
 *
 * @param {String} filePath
 * @param {String|Buffer} data
 * @returns {Promise}
 */
const writeFile = (filePath, data) => new Promise((resolve, reject) => {
  fs.writeFile(filePath, data, (err) => {
    if (err) reject(err)
    resolve()
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

/**
 * 删除目录
 * @param {String} target
 * @returns {Promise}
 */
const rmdir = (target) => new Promise((resolve, reject) => {
  fs.rmdir(target, (err) => {
    if (err) reject(err)
    resolve()
  })
})

/**
 * 删除文件
 * @param {String} target
 * @returns {Promise}
 */
const rm = (target) => new Promise((resolve, reject) => {
  fs.rm(target, (err) => {
    if (err) reject(err)
    resolve()
  })
})

module.exports = {
  writeFile,
  createDir,
  checkExit,
  rmdir,
  rm,
}
