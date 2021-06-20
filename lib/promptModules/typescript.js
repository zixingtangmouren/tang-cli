/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:26:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 22:45:02
 * @Description: TypeScript
 */

/**
 * @param {import('../Creator')} creator
 */
module.exports = (creator) => {
  creator.injectFeature({
    name: 'TypeScript',
    value: 'TypeScript',
    short: 'TypeScript',
    description: 'Transpile modern JavaScript to older versions (for compatibility)',
    link: 'https://TypeScriptjs.io/',
  })
}
