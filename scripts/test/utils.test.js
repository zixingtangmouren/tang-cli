/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 11:27:31
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-22 19:11:11
 * @Description: 测试工具方法
 */

const { describe, it } = require('mocha')
const path = require('path')
const {
  checkExit, createDir, rmdir, copyDir,
} = require('../../lib/utils/fileActions')

const { checkNodeVersion } = require('../../lib/utils')

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

  it('check createDir function', async () => {
    const dirCode = parseInt((Math.random() * (10 ** 6)).toFixed(6))
    const dirName = `testDir${dirCode}`
    const dirPath = path.join(process.cwd(), dirName)
    await createDir(dirName)
    await checkExit(dirPath)
    await rmdir(dirPath)
  })

  it('check copyDir', async () => {
    const source = path.join(process.cwd(), 'scripts')
    const target = path.join(process.cwd(), 'copy')
    await copyDir(source, target)
  })

  it('check checkNodeVersion', () => {
    if (!checkNodeVersion('14.4.1')) {
      throw new Error('checkNodeVersion error')
    }
  })
})
