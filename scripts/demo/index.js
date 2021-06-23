/**
 * @Author: tangzhicheng
 * @Date: 2021-06-22 22:35:23
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-22 23:02:10
 * @Description: file content
 */
const execa = require('execa');

(async () => {
  const { stdout } = await execa('yarn', ['-v'])
  console.log(stdout)
  //= > 'unicorns'
})()
