/**
 * @Author: tangzhicheng
 * @Date: 2021-06-24 15:55:41
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-24 16:27:45
 * @Description: file content
 */

/**
 * 创建router资源
 * @param {import('../Generator')} generator
 * @returns {Promise}
 */
module.exports = async (generator) => {
  const { framework } = generator.Selected
  let FIEL_NAME
  let dependencies
  switch (framework) {
    case 'react':
      FIEL_NAME = 'react-router-dom'
      dependencies = {
        'react-router-dom': '^5.2.0',
      }
      break
    case 'vue':
      break
    case 'angular':
      break
  }

  generator.extendPackage({
    dependencies,
  })

  return FIEL_NAME
}
