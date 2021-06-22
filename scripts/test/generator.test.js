/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:54:22
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-22 15:23:29
 * @Description: file content
 */

const { describe, it, beforeEach } = require('mocha')
const path = require('path')
const assert = require('assert').strict
const { checkExit } = require('../../lib/utils/fileActions')
const Generator = require('../../lib/Generator')

describe('check generator', () => {
  process.chdir(path.join(__dirname, '../demo'))

  let generator

  beforeEach(() => {
    generator = new Generator('app', { framework: 'react' })
  })

  it('check Generator extendPackage function', () => {
    const g = new Generator()

    g.extendPackage({
      devDependencies: {
        '@babel/core': '^7.14.2',
        '@babel/polyfill': '^7.12.1',
        'babel-eslint': '^10.1.0',
        'babel-loader': '^8.2.2',
      },
    })

    g.extendPackage({
      devDependencies: {
        '@babel/preset-env': '^7.14.2',
        '@babel/preset-react': '^7.13.13',
      },
    })

    assert.deepEqual(g.package, {
      name: '',
      version: '1.0.0',
      description: '',
      devDependencies: {
        '@babel/core': '^7.14.2',
        '@babel/polyfill': '^7.12.1',
        'babel-eslint': '^10.1.0',
        'babel-loader': '^8.2.2',
        '@babel/preset-env': '^7.14.2',
        '@babel/preset-react': '^7.13.13',
      },
    })
  })

  it('check babel', async () => {
    const babelGenerator = require('../../lib/generator/babel')
    await babelGenerator(generator)
    const isExit = await checkExit(path.join(process.cwd(), 'babel.config.json'))
    if (!isExit) throw new Error()
  })

  it('check src', async () => {
    const srcGenerator = require('../../lib/generator/src')
    await srcGenerator({ Selected: { framework: 'react' }, package: { name: 'app-demo' } })
  })

  it('check eslint', async () => {
    const eslintGenerator = require('../../lib/generator/eslint')
    await eslintGenerator(generator)
    const isExit = await checkExit(path.join(process.cwd(), '.eslintrc'))
    if (!isExit) throw new Error()
  })

  it('check Generator output', async () => {
    await generator.outputPackage()
    const isExit = await checkExit(path.join(process.cwd(), 'package.json'))
    if (!isExit) throw new Error()
  })
})
