'use strict'
const path = require('path')

// const webpack = require('webpack')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // publicPath: '/vuepress-starter',
    context: path.resolve(__dirname, './'),
    configureWebpack: (config, isServer) => {
        if (!isServer) {
            config.resolve.alias = {
                '@': resolve('docs'),
                '@vue': resolve('/docs/vue'),
                '@question': resolve('/docs/question')
            }
        }
    }
}