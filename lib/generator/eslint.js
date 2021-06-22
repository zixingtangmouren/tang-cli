/**
 * @Author: tangzhicheng
 * @Date: 2021-06-22 11:19:03
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-22 18:26:00
 * @Description: eslint
 */

const ejs = require('ejs')
const path = require('path')
const { readFile, writeFile } = require('../utils/fileActions')

/**
 * 处理eslint
 * @param {import('../Generator')} generator
 * @returns {Promise}
 */
module.exports = async (generator) => {
  const { framework } = generator.Selected
  let rules = {}
  generator.extendPackage({
    devDependencies: {
      eslint: '7.2.0',
      'eslint-loader': '^4.0.2',
    },
  })
  switch (framework) {
    case 'react':
      generator.extendPackage({
        devDependencies: {
          'eslint-config-airbnb': '18.2.1',
          'eslint-plugin-import': '2.22.1',
          'eslint-plugin-jsx-a11y': '6.4.1',
          'eslint-plugin-react': '7.21.5',
          'eslint-plugin-react-hooks': '1.7.0',
        },
      })
      rules = {
        'linebreak-style': 'off',
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
      }
      break
    case 'vue':
      break
    case 'angular':
      break
  }
  const template = await readFile(path.join(__dirname, '../template/.eslintrc'))
  const source = await ejs.render(template, { rules })
  await writeFile(path.join(process.cwd(), '.eslintrc'), source)

  return '.eslintr'
}
