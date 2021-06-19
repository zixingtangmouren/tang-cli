/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:26:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 12:20:22
 * @Description: Webpack
 */

module.exports = (manager) => {
  manager.injectFeature({
    name: 'Webpack',
    value: 'Webpack',
    short: 'Webpack',
    description: 'Transpile modern JavaScript to older versions (for compatibility)',
    link: 'https://Webpackjs.io/',
    checked: true,
  })
}
