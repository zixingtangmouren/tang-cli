/**
 * @Author: tangzhicheng
 * @Date: 2021-06-14 17:47:48
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-15 20:39:55
 * @Description: file content
 */

const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

module.exports = {
  devConfig,
  prodConfig,
}
