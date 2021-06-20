/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:54:22
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-20 23:25:33
 * @Description: file content
 */

const { describe, it } = require('mocha')
const path = require('path')
const { checkExit } = require('../../lib/utils/fileActions')

describe('check generator', (done) => {
  it('check babel', () => {
    const babelGenerator = require('../../lib/generator/babel')
    babelGenerator('react')
      .then(() => checkExit(path.join(process.cwd(), 'babel.config.json')))
      .then(() => done())
      .catch((err) => done(err))
  })
})
