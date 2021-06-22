/**
 * @Author: tangzhicheng
 * @Date: 2021-06-22 11:19:03
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-22 15:00:15
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
  switch (framework.toLocaleLowerCase()) {
    case 'react':
      generator.extendPackage({
        devDependencies: {
          'eslint-plugin-import': '2.22.1',
          'eslint-plugin-jsx-a11y': '6.4.1',
          'eslint-plugin-react': '7.21.5',
          'eslint-plugin-react-hooks': '1.7.0',
        },
      })
      rules = {
        'import/no-extraneous-dependencies': 'off',
        'global-require': 'off',
        'linebreak-style': 'off',
        'no-console': 'off',
        'react/button-has-type': 'off',
        'import/no-dynamic-require': 'off',
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
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
