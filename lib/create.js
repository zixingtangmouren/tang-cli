/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:57:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-20 14:27:15
 * @Description: file content
 */

const inquirer = require('inquirer')
const path = require('path')
const Creator = require('./Creator')

const creator = new Creator()
const { printCliName, createDir, checkExit } = require('./utils')

const create = async (name) => {
  try {
    console.clear()
    await printCliName()
    const isExit = await checkExit(path.join(process.cwd(), name))
    if (!isExit) {
      console.log(`正在创建<${name}>项目：`)
      const { framework } = await inquirer.prompt(creator.frameworkPrompt)
      const { features } = await inquirer.prompt(creator.getFeaturePrompts(framework))
      creator.getPersonalityPrompts(features)
      creator.startCreating()
      createDir(name)
    } else {
      throw new Error('该目录已经存在！请更换项目名称。')
    }
  } catch (error) {
    console.error('创建项目失败：', error)
  }
}

module.exports = create
