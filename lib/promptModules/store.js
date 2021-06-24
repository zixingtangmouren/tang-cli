/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:26:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-24 13:55:55
 * @Description: Redux
 */

/**
 * @param {import('../Creator')} creator
 */
module.exports = (creator) => {
  creator.injectFeature({
    name: 'Store',
    value: 'store',
    link: 'https://Redux.io/',
  })
}
