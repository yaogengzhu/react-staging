# 基于webpack5.x 实现一套脚手架工具


## 技术框架
- [x] react
- [x] react-dom
- [x] react-router-dom
- [x] less

## ui框架
- [x] antd

## 代码规范
- [x] eslint
- [x] prettierrc
- [x] husky






### webpack配置-遇到的一些问题

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
            'primary-color': '#1781b5',
        },
        javascriptEnabled: true,
        paths: [path.resolve(rootDir, 'node_modules')], // 解决编译速度极慢
    }
}
...
```