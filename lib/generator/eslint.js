/**
 * @Author: tangzhicheng
 * @Date: 2021-06-22 11:19:03
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-23 23:03:00
 * @Description: eslint
 */

const path = require('path')
const { merge } = require('../utils')
const { writeFile } = require('../utils/fileActions')

/**
 * 处理eslint
 * @param {import('../Generator')} generator
 * @returns {Promise}
 */
module.exports = async (generator) => {
  const { framework } = generator.Selected
  const FIEL_NAME = '.eslintrc'
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

  const eslintJson = require('../template/.eslintrc.json')

  merge(eslintJson.rules, rules)

  await writeFile(path.join(process.cwd(), FIEL_NAME), JSON.stringify(eslintJson, '', '\t'))

  return FIEL_NAME
}
