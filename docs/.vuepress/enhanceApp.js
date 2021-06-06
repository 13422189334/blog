'use strict'
const path = require('path')

// const webpack = require('webpack')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/vuepress-starter',
    configureWebpack: config => {
        config.resolve.alias = {
            '@src': resolve('/src'),
            '@vue': resolve('/src/vue'),
            '@question': resolve('/src/question')
        }
    }
}