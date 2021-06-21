/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 15:39:47
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-21 17:21:47
 * @Description: file content
 */

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
    console.log('emit file', this.Selected)
    this.Selected.features.forEach((feature) => {
      require(`../lib/generator/${feature}`)(this.Selected.framework)
    })
  }
}
