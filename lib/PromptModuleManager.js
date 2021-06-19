/**
 * @Author: tangzhicheng
 * @Date: 2021-06-19 12:11:36
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-19 12:29:19
 * @Description: file content
 */

module.exports = class PromptModuleManager {
  constructor(creator) {
    this.creator = creator
  }

  injectFeature(feature) {
    this.creator.featurePrompt.choices.push(feature)
  }

  injectPrompt(prompt) {
    this.creator.injectedPrompts.push(prompt)
  }
}
