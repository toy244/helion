# helion
开箱即用的webpack脚手架

## 用法


## 技术栈
### Vue
- 编程语言：TypeScript 4.x + JavaScript
- 构建工具：Vite 2.x
- 前端框架：Vue 3.x
- 路由工具：Vue Router 4.x
- 状态管理：Vuex 4.x
- UI 框架：Element Plus
- CSS 预编译：Stylus / Sass / Less
- HTTP 工具：Axios
- Git Hook 工具：husky + lint-staged
- 代码规范：EditorConfig + Prettier + ESLint + Airbnb JavaScript Style Guide
- 提交规范：Commitizen + Commitlint
- 单元测试：vue-test-utils + jest + vue-jest + ts-jest
- 自动部署：GitHub Actions

## 对比v4的变化
1. 持久化缓存，增加 cache 配置. v5 中缓存默认是 memory，修改设置"filesystem"写入硬盘

2. 去除插件 clean-webpack-plugin（v5支持），webpack.HashedModuleIdsPlugin（v5更好的 moduleIds & chunkIds），HardSourceWebpackPlugin（v5支持），happypack（v5不兼容）

### Packages

```js
// babel 转换JS代码
"@babel/core"
// 转换ES新的语法
"@babel/preset-env"
// 转换 JSX
"@babel/preset-react"
// 转换 Typescript
"@babel/preset-typescript"
// polyfill
"core-js"
// webpack css loader
"css-loader"
// webpack css 压缩插件
"css-minimizer-webpack-plugin"
// webpack html 模板插件
"html-webpack-plugin"
// less 语法
"less"
// webpack less loader
"less-loader"
// webpack 提取css到单独的文件
"mini-css-extract-plugin"
// postcss 支持
"postcss"
// webpack postcss loader
"postcss-loader"
// postcss 
"postcss-preset-env"
// webpack 进度显示
"progress-bar-webpack-plugin"
// webpack css treeshark
"purgecss-webpack-plugin"
// webpack 检查耗时插件
"speed-measure-webpack-plugin"
// webpack style loader
"style-loader"
// webpack JS 压缩插件
"terser-webpack-plugin"
// webpack
"webpack"
// webpack 查看产物插件
"webpack-bundle-analyzer"
// webpack cli
"webpack-cli"
// webpack config merge
"webpack-merge"
```