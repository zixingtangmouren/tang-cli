/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:26:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 12:20:37
 * @Description: Router
 */

module.exports = (manager) => {
  manager.injectFeature({
    name: 'Router',
    value: 'Router',
    short: 'Router',
    description: 'Transpile modern JavaScript to older versions (for compatibility)',
    link: 'https://Reduxjs.io/',
  })
}
