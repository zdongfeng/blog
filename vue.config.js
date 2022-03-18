/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-08-27 22:08:19
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-03-17 11:36:06
 */
'use strict'
const path = require('path');
module.exports = {
    // outputDir: 'docs',
    publicPath: '/blog',
    configureWebpack: {
        devServer: {
            open: true,
            // 代理
            proxy: {
                '/api': {
                    target: 'http://localhost:8888',
                    // pathRewrite: {
                    //     '/api': ''
                    // },
                    changeOrigin: true,
                    secure: false
                }
            }
        },
        resolve: {
            // 别名
            alias: {
                '@': path.resolve(__dirname, './src'),
                assets: path.resolve(__dirname, './src/assets'),
                components: path.resolve(__dirname, './src/components'),
                style: path.resolve(__dirname, './src/style'),
                utils: path.resolve(__dirname, './src/utils')
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                // prependData: `
                //   @import "~@/style/variables.scss";
                //   @import "~@/style/mixin.scss";
                // `
            }
        }
    }
};
