/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-08-27 22:02:46
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2021-09-03 10:58:51
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
    }
]

export default new Router({
    // mode: 'history',
    routes
})
