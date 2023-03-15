# 练习案例集合 --- hellovue3

使用 vue3 + vite 构建的学习案例。

## Project Setup --- 初始化

```sh
npm install
```

### Compile and Hot-Reload for Development --- 启动

```sh
npm run dev
```

### Compile and Minify for Production --- 打包

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/) --- 代码规范

```sh
npm run lint
```

## 项目路由配置

整个项目包含多个练习案例，通过配置路由来改变组件，分别对应不同的学习案例。接下来对整个项目的路由配置进行介绍：

|路由|内容|备注|
|---|---|---|
|/|views 文件夹下的 HomePage 组件，使用 vue3 对百度首页 demo 的重构|1.布局结构由layou文件夹定义，主要包含三个部分，分别是 Header，Conetent 以及 Footer；<br /> 2.引入 ant design ui 的组件，构建搜索框，存在一个问题，就是**封装组件的自定义样式问题**，目前使用 !important 强行设置权重，后续会继续学习 deep 样式穿透的方案并了解其原理；<br /> 3.使用媒体查询方式适配了不同的设备，后续会继续了解其他移动端适配方案。|
|/dialog|views 文件夹下的 Dialog 组件，使用 vue3 实现的 Dialog 组件|父子组件通信实现状态管理，该组件接收一个 prop 作为 v-if 指令的输入，在自组件中有一个按钮，点击按钮触发自定义事件，将该拜年状态的信号传递给父组件，完成响应式状态更新。|
|/recursive|views 文件夹下的 Recursive 组件，使用递归组件实现树型结构可视化|在组件的模板中定义同名标签并传递子数据|
|/dynamic|views 文件夹下的 Dynamic 组件，使用内置标签 component 实现动态组件|markRaw 和 shallowRef 进行优化，减少响应式的标记数量|
|/waterfall|views 文件夹下的 WaterFall 组件，实现瀑布流效果|计算页面宽度，确定一行可以放置几个 item，然后维护每一列的高度，使用 v-for 指令来遍历每一个 item，确定列的位置并更新高度|
|/async|views 文件夹下的 Async 组件，实现骨架屏加载异步组件|使用 vue3 新的内置组件 suspense 加载异步组件|
|/keepAlive|views 文件夹下的 KeepAlive 组件，实现组件数据缓存功能|实现切换组件的时候，前一个组件在下次恢复的时候可以缓存其数据，重新复现|