/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:26:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 22:43:20
 * @Description: babel
 */

/**
 * @param {import('../Creator')} creator
 */
module.exports = (creator) => {
  creator.injectFeature({
    name: 'Babel',
    value: 'Babel',
    description: 'Transpile modern JavaScript to older versions (for compatibility)',
    link: 'https://babeljs.io/',
    checked: true,
  })
}
