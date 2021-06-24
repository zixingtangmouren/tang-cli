/**
 * @Author: tangzhicheng
 * @Date: 2021-06-24 16:36:28
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-24 16:53:40
 * @Description: file content
 */
const { describe, it, beforeEach } = require('mocha')
const path = require('path')
const Generator = require('../../lib/Generator')

process.chdir(path.join(process.cwd(), 'scripts/demo'))

describe('check ejs', () => {
  let generator
  beforeEach(() => {
    generator = new Generator('app', { framework: 'react', features: ['store', 'router'] })
  })

  it('check src/App.jsx', async () => {
    const srcGenerator = require('../../lib/generator/src')
    await srcGenerator(generator)
  })
})
