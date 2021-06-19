/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:26:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 12:20:30
 * @Description: Eslint
 */

module.exports = (manager) => {
  manager.injectFeature({
    name: 'Eslint',
    value: 'Eslint',
    short: 'Eslint',
    description: 'Transpile modern JavaScript to older versions (for compatibility)',
    link: 'https://Eslintjs.io/',
  })
}
