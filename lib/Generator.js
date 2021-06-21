/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 15:39:47
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-21 23:26:21
 * @Description: file content
 */

const merge = require('merge')
const path = require('path')
const logger = require('./utils/logger')
const { printCliName } = require('./utils')
const { writeFile } = require('./utils/fileActions')

module.exports = class Generator {
  /**
   * @param {String} name
   * @param {{ framework: String, features: String[], }} Selected
   */
  constructor(name = '', Selected) {
    this.package = {
      name,
      version: '1.0.0',
      description: '',
    }

    this.Selected = Selected
  }

  /**
   * TODO:这个方法合并有问题
   * @param {Object} fields
   */
  extendPackage(fields) {
    this.package = merge(this.package, fields)
  }

  outputPackage() {
    const packgejson = JSON.stringify(this.package)
    return writeFile(path.join(process.cwd(), 'package.json'), packgejson.toString())
  }

  /**
   * 输出文件
   */
  async emit() {
    console.clear()
    await printCliName()
    logger.info('正在初始化项目.....')
    this.Selected.features.concat(['src']).forEach((feature) => {
      require(`../lib/generator/${feature}`)(this).then((name) => logger.success(`  ${name} created`))
    })

    this.outputPackage()
  }
}
