/**
 * @Author: tangzhicheng
 * @Date: 2021-06-24 11:47:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-24 13:57:20
 * @Description: file content
 */

const path = require('path')
const { copyDir } = require('../utils/fileActions')

/**
 * 创建store资源（Vuex, Redux）
 * @param {import('../Generator')} generator
 * @returns {Promise}
 */
module.exports = async (generator) => {
  const { framework } = generator.Selected
  let FILE_NAME
  switch (framework) {
    case 'react':
      generator.extendPackage({
        dependencies: {
          'react-redux': '^7.2.4',
          '@reduxjs/toolkit': '^1.6.0',
          redux: '^4.1.0',
        },
      })
      FILE_NAME = 'redux'
      break
    case 'vue':
      FILE_NAME = 'vuex'
      break
    case 'angular':
      break
  }

  await copyDir(path.join(__dirname, `../template/store/${framework}`), path.join(process.cwd(), 'src'))

  return FILE_NAME
}
