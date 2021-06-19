/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:26:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 21:27:51
 * @Description: babel
 */

module.exports = (manager) => {
  manager.injectFeature({
    name: 'Babel',
    value: 'Babel',
    short: 'Babel',
    description: 'Transpile modern JavaScript to older versions (for compatibility)',
    link: 'https://babeljs.io/',
    checked: true,
  })
}
