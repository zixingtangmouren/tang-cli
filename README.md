<!--
 * @Author: tangzhicheng
 * @Date: 2021-06-21 08:52:11
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-24 15:39:01
 * @Description: file content
-->

# tang-cli

一个功能齐全的脚手架。支持`Vue, React，Angular`框架的项目模板构建。还可以选择移动端和 pc 端模板。

目前只支持`React`的项目模板，当前集成了`babel, eslint, webpack, CssProcessors, Store`。更多`feature`敬请期待。

## 快速上手

1. 现在脚手架的 npm 包

```hash
npm install tangmr-cli -g
```

2. 使用 tang-cli

```hash
tang create demo-app
```

## React 项目模板

```js
├── src
│   ├── app                              # redux
│   │   ├── store.js
│   ├── components                       # 公共组件
│   ├── features                         # redux相关
│   ├── App.jsx                          # 根组件
│   ├── index.html                       # html文件
│   ├── index.js                         # 项目入口
├── webpack                              # webpack相关配置
│   ├── utils                            # webpack配置方法
│   │   ├── setMAP.js
│   ├── webpack.base.js                  # 基础配置
│   ├── webpack.dev.js                   # 开发环境
│   ├── webpack.prod.js                  # 生产环境
├── .eslintrc                            # eslint配置
├── babel.config.json                    # babel配置
├── package.json                         # package文件
├── postcss.config.js                    # postcss配置

```
