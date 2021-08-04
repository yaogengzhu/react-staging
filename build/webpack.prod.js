const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config')
const chalk = require('chalk') // 优化打包输出
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    devtool: 'hidden-source-map',
    cache: {
        type: 'filesystem',
    },
    plugins: [
        new ProgressBarPlugin({
            format: `${chalk.green.bold('build[:bar]')} ` + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false,
            width: 60,
        }),
    ],
    stats: 'normal', // 标准输出
})
