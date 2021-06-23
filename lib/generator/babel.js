/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:28:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-23 23:05:33
 * @Description: file content
 */

const path = require('path')
const { writeFile } = require('../utils/fileActions')

/**
 *
 * @param {import('../Generator')} generator
 * @returns {Promise<String>}
 */
module.exports = async (generator) => {
  const { framework } = generator.Selected
  const FIEL_NAME = 'babel.config.json'
  let injectPresets = []

  // 注入package.json配置
  generator.extendPackage({
    dependencies: {
      'core-js': '^3.12.1',
    },
    devDependencies: {
      '@babel/core': '^7.14.2',
      '@babel/polyfill': '^7.12.1',
      'babel-eslint': '^10.1.0',
      'babel-loader': '^8.2.2',
    },
  })

  // 注入babel.config配置
  switch (framework) {
    case 'react':
      injectPresets = ['@babel/preset-react']
      generator.extendPackage({
        devDependencies: {
          '@babel/preset-env': '^7.14.2',
          '@babel/preset-react': '^7.13.13',
        },
      })
      break
    case 'vue':
      break
    case 'angular':
      break
  }

  const babelJson = require('../template/babel.config.json')
  babelJson.presets.push(...injectPresets)

  await writeFile(path.join(process.cwd(), FIEL_NAME), JSON.stringify(babelJson, '', '\t'))

  return FIEL_NAME
}
