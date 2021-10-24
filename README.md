# react项目环境配置（react项目脚手架）

## 该脚手架特点
- 基于webpack5.x配置
- eslint代码风格统一
- husky代码提交检测
- 环境变量配置规范化

## 技术框架
- [x] react
- [x] react-dom
- [x] react-router-dom
- [x] hooks
- [x] less

## ui框架
- [x] antd-molie ^5.0.0-beta.6（锁定版本）

## 代码规范
- [x] eslint
- [x] prettierrc
- [x] husky


## commit 提交规范
| 类型     | 描述                                                   |
| -------- | ------------------------------------------------------ |
| build    | 编译相关的修改，例如发布版本、对项目构建或者依赖的改动         |
| chore    | 其他修改, 比如改变构建流程、或者增加依赖库、工具等             |
| ci       | 持续集成修改                                           |
| docs     | 文档修改                                               |
| feat     | 新特性、新功能                                         |
| fix      | 修改 bug                                               |
| perf     | 优化相关，比如提升性能、体验                               |
| refactor | 代码重构                                              |
| revert   | 回滚到上一个版本                                        |
| style    | 代码格式修改, 注意不是 css 修改                          |
| test     | 测试用例修改                                           |

**使用示例**
```bash
git commit -m 'feact(home): 航空母舰上线'  # 类型: 描述
```