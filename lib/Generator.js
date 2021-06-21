/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 15:39:47
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-21 22:46:13
 * @Description: file content
 */

const logger = require('./utils/logger')
const { printCliName } = require('./utils')

module.exports = class Generator {
  /**
   * @param {String} name
   * @param {{ framework: String, features: String[], }} Selected
   */
  constructor(name, Selected) {
    this.package = {
      name,
      version: '1.0.0',
      description: '',
    }

    this.Selected = Selected
  }

  /**
   *
   * @param {Object} fileds
   */
  extendPackage(fileds) {
    this.package = { ...this.package, ...fileds }
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
  }
}
