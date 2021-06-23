/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:26:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 22:59:06
 * @Description: Eslint
 */

/**
 * @param {import('../Creator')} creator
 */
module.exports = (creator) => {
  creator.injectFeature({
    name: 'Eslint',
    value: 'eslint',
    description: 'Transpile modern JavaScript to older versions (for compatibility)',
    link: 'https://Eslint.io/',
    checked: true,
    choices: [],
  })
}
