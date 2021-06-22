/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:42:36
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-22 22:52:20
 * @Description: file content
 */

const chalk = require('chalk')

module.exports = {
  success(string) {
    console.log(chalk.green(string))
  },
  bigSuccess(string) {
    console.log(chalk.bgGreen(string))
  },
  error(string) {
    console.log(chalk.red(string))
  },
  bigError(string) {
    console.log(chalk.bgRed(string))
  },
  message(string) {
    console.log(chalk.bgCyan(string))
  },
  info(string) {
    console.log(chalk.bold(string))
  },
}
