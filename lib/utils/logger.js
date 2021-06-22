/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:42:36
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-22 18:39:48
 * @Description: file content
 */

const chalk = require('chalk')

module.exports = {
  success(string) {
    console.log(chalk.green(string))
  },
  error(string) {
    console.log(chalk.red(string))
  },
  message(string) {
    console.log(chalk.blue(string))
  },
  info(string) {
    console.log(string)
  },
}
