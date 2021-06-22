/**
 * @Author: tangzhicheng
 * @Date: 2021-06-21 14:37:58
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-22 15:50:33
 * @Description: file content
 */

const path = require('path')
const { copyDir } = require('../utils/fileActions')

/**
 *
 * @param {import('../Generator')} generator
 * @returns {Promise}
 */
module.exports = async (generator) => {
  const { framework } = generator.Selected
  const root = process.cwd()
  switch (framework.toLocaleLowerCase()) {
    case 'react':
      generator.extendPackage({
        dependencies: {
          react: '^17.0.2',
          'react-dom': '^17.0.2',
        },
      })
      break
    case 'vue':
      break
    case 'angular':
      break
  }
  await copyDir(path.join(__dirname, `../template/src/${framework}`), `${root}/src`)
  return 'src'
}
