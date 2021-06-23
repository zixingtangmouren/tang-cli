/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:57:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-23 16:41:38
 * @Description: file content
 */

const inquirer = require('inquirer')
const path = require('path')
const Creator = require('./Creator')
const Generator = require('./Generator')

const creator = new Creator()
const { printCliName, checkNodeVersion } = require('./utils')
const { createDir, checkExit } = require('./utils/fileActions')
const logger = require('./utils/logger')

const NODE_VERSION = '14.17.1'

const create = async (name) => {
  try {
    if (checkNodeVersion(NODE_VERSION)) {
      /**
       * 选项配置交互
       */
      console.clear()
      const targetDir = path.join(process.cwd(), name)
      await printCliName()
      const isExit = await checkExit(targetDir)
      if (!isExit) {
        console.log(`正在创建<${name}>项目：`)
        const { framework } = await inquirer.prompt(creator.frameworkPrompt)
        creator.selected.framework = framework

        // TODO:暂时性的
        if (framework !== 'react') {
          throw new Error(`当前暂不支持${framework}的模板创建`)
        }

        const { features } = await inquirer.prompt(creator.getFeaturePrompt(framework))
        creator.selected.features = features
        const personality = await inquirer.prompt(creator.getPersonalityPrompts(features))
        creator.selected.personality = personality

        /**
         * 开始初始化项目
         */
        await createDir(name)
        process.chdir(targetDir)
        const selected = creator.getSelectedOptions()
        const generator = new Generator(name, selected)
        await generator.emit()
        generator.outputPackage()
        /**
         * TODO:V3 版本要增加自动下载依赖的功能
         */
        logger.message('快速开始\n')
        logger.info(` cd ${name}`)
        logger.info(' npm install')
        logger.info(' npm run dev\n')
      } else {
        throw new Error('该目录已经存在！请更换项目名称。')
      }
    } else {
      throw new Error(`当前node版本过低，请升级到 v${NODE_VERSION}及以上。`)
    }
  } catch (error) {
    console.error('创建项目失败：', error)
  }
}

module.exports = create
