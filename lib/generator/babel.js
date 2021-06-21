/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:28:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-21 14:31:11
 * @Description: file content
 */

const FILE_NAME = 'babel.config.json'

/**
 *
 * @param {String} framework
 * @returns {{source: String, target: String}}
 */
module.exports = (framework) => {
  const babelConfig = require('../template/babel')
  let injectPresets = []
  switch (framework.toLocaleLowerCase()) {
    case 'react':
      injectPresets = ['@babel/preset-react']
      break
    case 'vue':
      break
    case 'angular':
      break
  }

  babelConfig.presets[0].push(...injectPresets)

  return {
    source: JSON.stringify(babelConfig),
    target: FILE_NAME,
  }
}
