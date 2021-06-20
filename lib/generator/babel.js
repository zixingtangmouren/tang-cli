/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:28:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-20 23:33:52
 * @Description: file content
 */

const path = require('path')
const { writeFile } = require('../utils/fileActions')
const { success, error } = require('../utils/logger')

const FILE_NAME = 'babel.config.json'

/**
 *
 * @param {String} framework
 * @returns {Promise}
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

  return writeFile(path.join(process.cwd(), FILE_NAME), JSON.stringify(babelConfig))
    .then(() => success(`${FILE_NAME} 创建成功`))
    .catch((err) => {
      const msg = `${FILE_NAME} 创建失败`
      error(msg)
      return err
    })
}
