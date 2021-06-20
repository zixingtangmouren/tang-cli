/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 11:27:31
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-20 23:22:16
 * @Description: 测试工具方法
 */

const { describe, it } = require('mocha')
const path = require('path')
const { checkExit, createDir, rmdir } = require('../../lib/utils/fileActions')

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
      .then(() => checkExit(dirPath))
      .then(() => rmdir(dirPath))
      .then(() => done())
      .catch((err) => done(err))
  })
})
