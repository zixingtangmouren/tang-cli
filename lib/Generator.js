/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 15:39:47
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-23 22:49:48
 * @Description: file content
 */

const path = require('path')
const execa = require('execa')
const logger = require('./utils/logger')
const { printCliName, merge } = require('./utils')
const { writeFile } = require('./utils/fileActions')

/**
 * 主要功能：
 * 1、将实例传递给generator模块函数
 * 2、模块函数内可以进行package字段注入和文件输出
 */
module.exports = class Generator {
  /**
   * @param {String} name
   * @param {{ framework: String, features: String[], personality: Object }} Selected
   */
  constructor(name = '', Selected) {
    this.package = {
      name,
      version: '1.0.0',
      description: '',
    }

    this.Selected = Selected
  }

  /**
   * 合并package
   * @param {Object} fields
   */
  extendPackage(fields) {
    merge(this.package, fields)
  }

  async checkYarn() {
    try {
      await execa('yarn', ['-v'])
      return true
    } catch (error) {
      return false
    }
  }

  /**
   * 输出文件
   * 会先执行generator模块中的方法（注入package字段，输出文件）
   */
  async emit() {
    console.clear()
    await printCliName()
    logger.info('正在初始化项目.....')
    const generatorTasks = this.Selected.features.concat(['src']).map((feature) => require(`../lib/generator/${feature}`)(this))

    const results = await Promise.all(generatorTasks)
    results.forEach((name) => {
      logger.success(`  ${name} created`)
    })

    logger.info('\n--- 项目资源创建完毕 ---\n')
  }

  /**
   * 写入package.json文件
   */
  async outputPackage() {
    const packgejson = JSON.stringify(this.package, '', '\t')
    await writeFile(path.join(process.cwd(), 'package.json'), packgejson.toString())
  }

  /**
   * 下载项目依赖
   * @param {*} command
   * @param {*} cwd
   * @returns
   */
  async installDependencies(command) {
    const parma = command === 'yarn' ? '' : 'install'
    await execa(command, [parma])
  }
}
