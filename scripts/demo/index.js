/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 14:05:04
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-20 16:01:11
 * @Description: file content
 */

const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

const source = fs.readFileSync(path.join(process.cwd(), 'lib/template/babel.config.json'), { encoding: 'utf-8' })

console.log(ejs.render(source, { presets: ['a', 'b'] }, { async: true }))
