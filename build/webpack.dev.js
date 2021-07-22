const webpacBaseConfig = require('./webpack.config')
const { merge } = require('webpack-merge') // 5.x
const webpack = require('webpack')

module.exports = merge(webpacBaseConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map', // 5.x
    cache: {
        type: 'memory',
    },
    performance: {
        hints: 'warning',
    },
    devServer: {
        port: 8000,
        stats: 'normal',
        historyApiFallback: true, // 处理BowerRouter
        compress: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            // Options...
        }),
        new webpack.ProgressPlugin({}),
    ],
})
