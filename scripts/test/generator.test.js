/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:54:22
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-21 23:21:31
 * @Description: file content
 */

const { describe, it } = require('mocha')
const path = require('path')
const assert = require('assert').strict
const { checkExit, rm } = require('../../lib/utils/fileActions')
const Generator = require('../../lib/Generator')

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

  it('check Generator extendPackage function', () => {
    const generator = new Generator()

    generator.extendPackage({
      devDependencies: {
        '@babel/core': '^7.14.2',
        '@babel/polyfill': '^7.12.1',
        'babel-eslint': '^10.1.0',
        'babel-loader': '^8.2.2',
      },
    })

    generator.extendPackage({
      devDependencies: {
        '@babel/preset-env': '^7.14.2',
        '@babel/preset-react': '^7.13.13',
      },
    })

    assert.deepEqual(generator.package, {
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
})
