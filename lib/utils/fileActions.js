/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:36:19
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-21 17:07:16
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
const createDir = (name, isName = true) => new Promise((resolve, rejetc) => {
  fs.mkdir(isName ? path.join(process.cwd(), name) : name, { recursive: true }, (err) => {
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

/**
 * 读取目录
 * @param {String} target
 * @returns
 */
const readdir = (target) => new Promise((resolve, reject) => {
  fs.readdir(target, (err, files) => {
    if (err) {
      reject(err)
    }
    resolve(files)
  })
})

/**
 * 检测文件信息
 * @param {String} target
 * @returns {Promise<fs.Stats>}
 */
const stat = (target) => new Promise((resolve, reject) => {
  fs.stat(target, (err, stats) => {
    if (err) {
      reject(err)
    }
    resolve(stats)
  })
})

/**
 * 复制文件
 * @param {String} source
 * @param {String} target
 */
const copyFile = (source, target) => new Promise((resolve, reject) => {
  const stream = fs.createReadStream(source).pipe(fs.createWriteStream(target))
  stream.on('error', (err) => reject(err))
  stream.on('finish', () => resolve())
})

/**
 * 复制目录
 * @param {String} source
 * @param {String} target
 */
const copyDir = async (source, target) => {
  // 判断目标目录是否存在
  const isExit = await checkExit(target)

  if (!isExit) {
    await createDir(target, false)
  }

  const dirs = await readdir(source)

  console.log(dirs)

  dirs.forEach(async (dirName) => {
    const stats = await stat(path.join(source, dirName))
    if (stats.isFile()) {
      // 文件的话直接复制
      await copyFile(`${source}/${dirName}`, `${target}/${dirName}`)
    }

    if (stats.isDirectory()) {
      await copyDir(`${source}/${dirName}`, `${target}/${dirName}`)
    }
  })
}

module.exports = {
  writeFile,
  createDir,
  checkExit,
  rmdir,
  rm,
  readdir,
  copyFile,
  stat,
  copyDir,
}
