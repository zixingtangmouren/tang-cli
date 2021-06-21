/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:28:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-21 23:12:29
 * @Description: file content
 */

const path = require('path')
const ejs = require('ejs')
const { readFile, writeFile } = require('../utils/fileActions')

/**
 *
 * @param {import('../Generator')} generator
 * @returns {Promise<String>}
 */
module.exports = async (generator) => {
  const { framework } = generator.Selected
  let injectPresets = []

  // 注入package.json配置
  generator.extendPackage({
    devDependencies: {
      '@babel/core': '^7.14.2',
      '@babel/polyfill': '^7.12.1',
      'babel-eslint': '^10.1.0',
      'babel-loader': '^8.2.2',
    },
  })

  // 注入babel.config配置
  switch (framework.toLocaleLowerCase()) {
    case 'react':
      injectPresets = ['@babel/preset-react']
      generator.extendPackag({
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

  const template = await readFile(path.join(__dirname, '../template/babel.config.json'))
  const source = await ejs.render(template, { presets: injectPresets })
  await writeFile(path.join(process.cwd(), 'babel.config.json'), source)

  return 'babel.config.json'
}
