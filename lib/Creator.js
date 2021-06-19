/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:24:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 12:27:03
 * @Description: 创建项目基本配置选项
 */

module.exports = class Creator {
  constructor() {
    // 基础模块功能
    this.featurePrompt = {
      name: 'features',
      message: '请选择项目的基本特性：',
      pageSize: 10,
      type: 'checkbox',
      choices: [],
    }

    // 个性化选择
    this.injectedPrompts = []
  }

  // 返回最终模板选项
  getFinalPrompts() {
    this.injectedPrompts.forEach((prompt) => {
      const originanlWhen = prompt.when || (() => true)
      prompt.when = (answers) => originanlWhen(answers)
    })

    return [
      this.featurePrompt,
      ...this.injectedPrompts,
    ]
  }
}
