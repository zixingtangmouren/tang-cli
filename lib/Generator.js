/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 15:39:47
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-21 14:41:43
 * @Description: file content
 */

module.exports = class Generator {
  constructor(name, features) {
    this.package = {
      name,
      version: '1.0.0',
      description: '',
    }

    this.features = features
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
  emit() {
    console.log('emit file', this.features)
  }
}
