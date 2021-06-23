/**
 * @Author: tangzhicheng
 * @Date: 2021-06-23 09:14:56
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-23 22:17:00
 * @Description: file content
 */

const path = require('path')
const { copyFile } = require('../utils/fileActions')

/**
 *
 * @param {import('../Generator')} generator
 * @returns {Promise<String>}
 */
module.exports = async (generator) => {
  const csspre = generator.Selected.personality.CssPreProcessors
  const FILE_NAME = 'postcss.config.js'
  const postcssDependencies = {
    postcss: '^8.2.15',
    'postcss-loader': '^4.3.0',
    autoprefixer: '^10.2.6',
  }
  let devDependencies
  if (csspre === 'sass') {
    devDependencies = {
      sass: '^1.32.13',
      'sass-loader': '^10.2.0',
    }
  } else if (csspre === 'less') {
    devDependencies = {
      less: '^4.1.1',
      'less-loader': '^10.0.0',
    }
  }

  generator.extendPackage({
    devDependencies: {
      ...postcssDependencies,
      ...devDependencies,
    },
    browserslist: {
      production: [
        '>0.2%',
        'not dead',
        'not op_mini all',
      ],
      development: [
        'last 1 chrome version',
        'last 1 firefox version',
        'last 1 safari version',
      ],
    },
  })
  await copyFile(path.join(__dirname, '../template/postcss.config.js'), path.join(process.cwd(), FILE_NAME))

  return FILE_NAME
}
