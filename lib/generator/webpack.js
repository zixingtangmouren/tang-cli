/**
 * @Author: tangzhicheng
 * @Date: 2021-06-21 22:50:47
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-23 16:46:02
 * @Description: file content
 */

const path = require('path')
const { copyDir } = require('../utils/fileActions')

/**
 * 处理webpack
 * @param {import('../Generator')} generator
 * @returns {Promise}
 */
module.exports = async (generator) => {
  const root = process.cwd()
  generator.extendPackage({
    scripts: {
      dev: 'webpack-dev-server --config webpack/webpack.dev',
      build: 'webpack --config webpack/webpack.prod',
    },
    devDependencies: {
      'clean-webpack-plugin': '^4.0.0-alpha.0',
      'css-loader': '^5.2.4',
      cssnano: '^5.0.2',
      'file-loader': '^6.2.0',
      'friendly-errors-webpack-plugin': '^1.7.0',
      'hard-source-webpack-plugin': '^0.13.1',
      'html-webpack-plugin': '^4.5.2',
      'mini-css-extract-plugin': '^1.6.0',
      'optimize-css-assets-webpack-plugin': '^5.0.4',
      'purgecss-webpack-plugin': '^4.0.3',
      'style-loader': '^2.0.0',
      'terser-webpack-plugin': '^4.2.3',
      'thread-loader': '^3.0.4',
      'url-loader': '^4.1.1',
      webpack: '^4.46.0',
      'webpack-cli': '^3.3.12',
      'webpack-merge': '^5.7.3',
      webpackbar: '^5.0.0-3',
      'webpack-dev-server': '^3.11.2',
    },
  })
  await copyDir(path.join(__dirname, '../template/webpack'), `${root}/webpack`)
  return 'webpack'
}
