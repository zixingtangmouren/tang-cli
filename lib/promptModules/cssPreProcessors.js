/**
 * @Author: tangzhicheng
 * @Date: 2021-06-23 09:14:56
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-23 16:31:01
 * @Description: file content
 */
/**
 * @param {import('../Creator')} creator
 */
module.exports = (creator, isFeature) => {
  if (!isFeature) {
    creator.injectPersonality({
      name: 'CssPreProcessors',
      value: 'cssPreProcessors',
      type: 'list',
      choices: [
        {
          name: 'Sass',
          value: 'sass',
        },
        {
          name: 'Less',
          value: 'less',
        },
      ],
    })
  } else {
    creator.injectFeature({
      name: 'Css Pre-Processors',
      value: 'cssPreProcessors',
    })
  }
}
