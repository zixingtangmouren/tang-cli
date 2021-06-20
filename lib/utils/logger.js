/**
 * @Author: tangzhicheng
 * @Date: 2021-06-20 22:42:36
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-20 22:45:55
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
  info(string) {
    console.log(string)
  },
}
