/**
 * @Author: tangzhicheng
 * @Date: 2021-06-15 10:48:19
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-22 17:18:43
 * @Description: file content
 */

const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const setMAP = (ROOT) => {
  const pageDirNames = fs.readdirSync(path.join(ROOT, 'src'))
  const entry = {}
  const htmlPlugins = []

  const createHWP = (name, isMultiple) => {
    const entryPath = isMultiple ? `./src/${name}/index.js` : './src/index.js'
    const plugin = new HtmlWebpackPlugin({
      filename: `${name}.html`,
      title: name,
      chunks: [`${name}`],
      template: path.join(ROOT, isMultiple ? `src/${name}/index.html` : 'src/index.html'),
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
      },
    })

    return {
      entryPath,
      plugin,
    }
  }

  if (!pageDirNames.includes('index.js')) {
    pageDirNames.forEach((name) => {
      const { entryPath, plugin } = createHWP(name, true)
      entry[name] = entryPath
      htmlPlugins.push(plugin)
    })
  } else {
    const { entryPath, plugin } = createHWP('index', false)
    entry.index = entryPath
    htmlPlugins.push(plugin)
  }

  return {
    entry,
    htmlPlugins,
  }
}

module.exports = setMAP
