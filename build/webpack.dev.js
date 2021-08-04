const webpacBaseConfig = require('./webpack.config')
const { merge } = require('webpack-merge') // 5.x
const webpack = require('webpack')

module.exports = merge(webpacBaseConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map', // 5.x
    cache: {
        type: 'filesystem',
    },
    devServer: {
        host: '0.0.0.0',
        port: 8000,
        hot: true,
        open: true,
        stats: 'errors-only',
        useLocalIp: true,
        // disableHostCheck: true,
        historyApiFallback: true, // 处理BowerRouter
        compress: true,
        proxy: {
            '/api': {
                target: 'https://yaogeng.top',
                pathRewrite: { '^/api': '' },
                changeOrigin: true
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            // Options...
        }),
        new webpack.ProgressPlugin({}),
    ],
})
