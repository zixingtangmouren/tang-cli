/**
 * @Author: tangzhicheng
 * @Date: 2021-06-21 14:37:58
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-24 15:06:25
 * @Description: file content
 */

const path = require('path')
const { copyDir, copyFileEjs } = require('../utils/fileActions')

const withData = (data) => async (source, target) => { await copyFileEjs(source, target, data) }

/**
 *
 * @param {import('../Generator')} generator
 * @returns {Promise}
 */
module.exports = async (generator) => {
  const { framework } = generator.Selected
  const isNeedStore = generator.Selected.features.includes('store')
  const root = process.cwd()
  switch (framework) {
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
  await copyDir(path.join(__dirname, `../template/src/${framework}`), `${root}/src`, withData({ isNeedStore }))
  return 'src'
}
