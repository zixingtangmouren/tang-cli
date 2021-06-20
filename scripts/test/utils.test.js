/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 11:27:31
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-20 13:45:02
 * @Description: 测试工具方法
 */

const fs = require('fs')
const { describe, it } = require('mocha')
const path = require('path')
const { checkExit, createDir } = require('../../lib/utils/index')

describe('check utils function', () => {
  it('check checkExit function', (done) => {
    checkExit(path.join(process.cwd(), 'bin')).then((isExit) => {
      if (isExit) {
        done()
      } else {
        done(new Error('方法异常！'))
      }
    }).catch((err) => done(err))
  })

  it('check createDir function', (done) => {
    const dirCode = parseInt((Math.random() * (10 ** 6)).toFixed(6))
    const dirName = `testDir${dirCode}`
    const dirPath = path.join(process.cwd(), dirName)
    createDir(dirName)
      .then(() => done())
      .then(() => checkExit(dirPath))
      .then(() => fs.rmdirSync(dirPath))
      .catch((err) => done(err))
  })
})
