/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:57:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-21 21:37:37
 * @Description: file content
 */

const inquirer = require('inquirer')
const path = require('path')
const Creator = require('./Creator')
const Generator = require('./Generator')

const creator = new Creator()
const { printCliName } = require('./utils')
const { createDir, checkExit } = require('./utils/fileActions')

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
      await createDir(name)
      // 进入到当前项目目录
      process.chdir(path.join(process.cwd(), name))
      const selected = creator.getSelectedOptions()
      const generator = new Generator(name, selected)
      generator.emit()
    } else {
      throw new Error('该目录已经存在！请更换项目名称。')
    }
  } catch (error) {
    console.error('创建项目失败：', error)
  }
}

module.exports = create
