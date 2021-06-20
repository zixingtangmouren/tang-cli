/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:26:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 22:45:28
 * @Description: Webpack
 */

/**
 * @param {import('../Creator')} creator
 */
module.exports = (creator) => {
  creator.injectFeature({
    name: 'Webpack',
    value: 'Webpack',
    short: 'Webpack',
    description: 'Transpile modern JavaScript to older versions (for compatibility)',
    link: 'https://Webpackjs.io/',
    checked: true,
  })
}
