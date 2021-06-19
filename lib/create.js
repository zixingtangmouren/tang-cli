/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:57:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 21:22:03
 * @Description: file content
 */

const inquirer = require('inquirer')

const Creator = require('./Creator')
const Manager = require('./PromptModuleManager')

const creator = new Creator()
const manager = new Manager(creator)
const { getPromptModules, printCliName } = require('./utils')

const create = (name) => {
  getPromptModules([
    'babel',
    'eslint',
    'redux',
    'router',
    'typescript',
    'webpack',
  ]).forEach((module) => module(manager))

  printCliName()
    .then(() => console.log(`正在创建<${name}>项目：`))
    .then(() => {
      inquirer
        .prompt(creator.getFinalPrompts())
        .then((answers) => {
          console.log(answers)
        })
    })
}

module.exports = create
