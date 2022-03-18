/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-08-27 22:02:46
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2021-09-06 14:12:26
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [{
        path: '/',
        redirect: '/home',
        component: resolve => require(['@/layout/index'], resolve),
        children: [{
                name: 'Home',
                path: '/home',
                component: resolve => require(['@/views/home/index'], resolve),
                meta: {
                    title: '首页'
                }
            },
            {
                name: 'Create',
                path: '/create',
                component: resolve => require(['@/views/create/index'], resolve),
                meta: {
                    title: '创作'
                }
            },
            {
                name: 'ReadingNotes',
                path: '/readingNotes',
                component: resolve => require(['@/views/readingNotes/index'], resolve),
                meta: {
                    title: '读书笔记'
                }
            },
            {
                name: 'Article',
                path: '/article',
                component: resolve => require(['@/views/article/index'], resolve),
                meta: {
                    title: '文章'
                }
            }
        ]
    },
    {
        name: 'Login',
        path: '/login',
        component: resolve => require(['@/views/login/index'], resolve),
        meta: {
            title: '登录'
        }
    }
]

export default new Router({
    // mode: 'history',
    routes
})
