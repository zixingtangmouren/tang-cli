/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 11:24:44
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-23 16:42:05
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
          value: 'react',
        },
        {
          name: 'Vue',
          value: 'vue',
        },
        {
          name: 'Angular',
          value: 'angular',
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

    this.selected = {
      framework: '',
      features: [],
      personality: {},
    }
  }

  /**
   * 返回feature选择结果
   * 根据用户选择的框架，来组成对应的可选特征
   * @param {String} framework
   * @returns {*}
   */
  getFeaturePrompt(framework) {
    switch (framework) {
      case 'react':
        getPromptModules([
          'babel',
          'webpack',
          'eslint',
          'cssPreProcessors',
          'redux',
          'router',
          'typescript',
        ]).forEach((module) => module(this, true))
        break
      case 'vue':
        break
      case 'angular':
        break
    }

    return this.featurePrompt
  }

  /**
   * 根据用户选择的feature获取更细节的配置选项
   * @param {String[]} features
   * @returns {String[]}
   */
  getPersonalityPrompts(features) {
    getPromptModules(features).forEach((module) => module(this))
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

  getSelectedOptions() {
    return this.selected
  }
}
