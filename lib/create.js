/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:57:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 12:48:20
 * @Description: file content
 */

const inquirer = require('inquirer')
const figlet = require('figlet')
const chalk = require('chalk').default
const Creator = require('./Creator')
const Manager = require('./PromptModuleManager')

const creator = new Creator()
const manager = new Manager(creator)
const { getPromptModules } = require('./utils')

const create = (name) => {
  getPromptModules([
    'babel',
    'eslint',
    'redux',
    'router',
    'typescript',
    'webpack',
  ]).forEach((module) => module(manager))

  const printCliName = () => figlet('TANG CLI', (err, data) => {
    if (err) {
      console.log('Something went wrong...')
      console.dir(err)
      return
    }

    console.log(chalk.blue(data))
  })

  printCliName()

  console.log(`正在创建项目${name}：`)

  setTimeout(() => {
    inquirer
      .prompt(creator.getFinalPrompts())
      .then((answers) => {
        console.log(answers)
      })
  }, 200)
}

module.exports = create
