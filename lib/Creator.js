/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:24:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-20 23:41:43
 * @Description: 创建项目基本配置选项
 */

const { getPromptModules } = require('./utils')

module.exports = class Creator {
  constructor() {
    // 框架的选项
    this.frameworkPrompt = {
      name: 'framework',
      message: '请选择项目的开发框架：',
      type: 'list',
      choices: [
        {
          name: 'React',
          value: 'React',
        },
        {
          name: 'Vue',
          value: 'Vue',
        },
        {
          name: 'Angular',
          value: 'Angular',
        },
      ],
    }

    // 基础模块功能
    this.featurePrompt = {
      name: 'features',
      message: '请选择项目的基本特性：',
      pageSize: 10,
      type: 'checkbox',
      choices: [],
    }

    // 个性化细节选择
    // TODO:暂不开发
    this.personalityPrompts = []

    this.selectedFeature = []
  }

  /**
   * 返回最终模板选项
   * @param {String} framework
   * @returns
   */
  getFeaturePrompts(framework) {
    switch (framework) {
      case 'React':
        getPromptModules([
          'babel',
          'webpack',
          'eslint',
          'redux',
          'router',
          'typescript',
        ]).forEach((module) => module(this))
        break
      case 'Vue':
        break
      case 'Angular':
        break
    }
    this.personalityPrompts.forEach((prompt) => {
      const originanlWhen = prompt.when || (() => true)
      prompt.when = (answers) => originanlWhen(answers)
    })

    return this.featurePrompt
  }

  /**
   *
   * @param {String[]} features
   * @returns
   */
  getPersonalityPrompts(features) {
    this.selectedFeature = features
    return this.personalityPrompts
  }

  // 注入项目特征
  injectFeature(feature) {
    this.featurePrompt.choices.push(feature)
  }

  // 注入细节配置
  injectPersonality(prompt) {
    this.personalityPrompts.push(prompt)
  }

  // 开始创建项目
  startCreating() {
    console.log(this.selectedFeature)
    require('./generator/babel')('react')
  }
}
