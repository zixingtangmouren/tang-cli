/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:28:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-21 22:34:22
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
  switch (framework.toLocaleLowerCase()) {
    case 'react':
      injectPresets = ['@babel/preset-react', '@tang']
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
