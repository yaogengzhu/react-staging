# react项目环境配置（react项目脚手架）

## 该脚手架特点
- 基于webpack5.x配置
- eslint代码风格统一
- husky代码提交检测
- 基于axios封装api工具
- 基础路由结构完善
- 采用mobx 状态管理（可更换redux）

## 技术框架
- [x] react
- [x] react-dom
- [x] hooks
- [x] react-router-dom
- [x] less
- [x] mobx

## ui框架
- [x] antd

## 代码规范
- [x] eslint
- [x] prettierrc
- [x] husky


## 文件目录结构
```tree
├── README.md               # 文档
├── build
│   ├── webpack.config.js   # webpack基本脚手架配置
│   ├── webpack.dev.js      # webpack开发环境的配置
│   └── webpack.prod.js     # webpack生成打包环境的配置
├── jsconfig.json           # 项目文件路径引用的一些自定义配置
├── package-lock.json       
├── package.json
├── public                  # 项目基础一些模版配置
│   ├── favicon.ico         # 网址图标
│   ├── index.html
│   └── js                  # 用于配置一些百度统计 外部引用的js文件
├── server                  # webpack server配置
│   ├── index.js
│   └── logger.js           # webpack 终端输出配置
└── src
    ├── api                 # 基于aixos封装统一API
    ├── assets              # 公共文件
    ├── component           # 项目基础组件
    ├── index.jsx           # 项目入口文件
    ├── layout              # 项目布局文件
    ├── route               # 项目路由文件
    ├── store               # 状态管理（mbox）
    ├── utils               # 工具函数
    └── views               # 视图页面文件
```

### webpack配置-遇到的一些问题以及优化

**Q 解决hashRouter 和BowserRouter**的问题
```js
...
devServer: {
    port: 8000,
    // stats: 'errors-only',
    historyApiFallback: true, // 处理BowerRouter
    compress: true,
},
...
```
**Q 开发dev环境修改代码页面刷新极慢,修改webpack配置**
```js
...
{
    loader: 'less-loader',
    options: {
        modifyVars: {
            'primary-color': '#1781b5',  // 用于配置项目主题色
        },
        javascriptEnabled: true,
        paths: [path.resolve(rootDir, 'node_modules')], // 解决编译速度极慢
    }
}
...
```
