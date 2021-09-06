/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-08-27 22:02:46
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2021-09-06 10:50:09
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        name: 'Home',
        path: '/home',
        component: resolve => require(['@/views/home/index'], resolve),
        meta: {
            title: '首页'
        }
    },
    {
        name: 'Article',
        path: '/article',
        component: resolve => require(['@/views/article/index'], resolve),
        meta: {
            title: '正文'
        }
    }
]

export default new Router({
    // mode: 'history',
    routes
})
