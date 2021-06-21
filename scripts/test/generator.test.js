/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:54:22
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-21 22:31:45
 * @Description: file content
 */

const { describe, it } = require('mocha')
const path = require('path')
const { checkExit, rm } = require('../../lib/utils/fileActions')

describe('check generator', () => {
  it('check babel', async () => {
    const babelGenerator = require('../../lib/generator/babel')
    await babelGenerator({ Selected: { framework: 'react' } })
    const isExit = await checkExit(path.join(process.cwd(), 'babel.config.json'))
    if (!isExit) throw new Error()
    await rm(path.join(process.cwd(), 'babel.config.json'))
  })

  it('check src', async () => {
    const srcGenerator = require('../../lib/generator/src')
    await srcGenerator({ Selected: { framework: 'react' }, package: { name: 'app-demo' } })
  })
})
