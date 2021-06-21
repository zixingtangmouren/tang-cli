/**
 * @Author: tangzhicheng
 * @Date: 2021-06-21 14:37:58
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-21 22:39:18
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
  await copyDir(path.join(__dirname, `../template/src/${framework}`), root)
  return 'src'
}
