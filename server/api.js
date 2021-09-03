/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-09-01 09:52:53
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2021-09-01 10:13:23
 */
"use strict";
const db = require('./db');
const express = require('express');
const router = express.Router();
// const jwt = require("jsonwebtoken");
// const path = require('path');


/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/
// 注册
router.post('/api/admin/signUp', (req, res) => {
    let newUser = new db.User({
        name: req.body.name,
        type: 2 //1为管理员，2为游客,写死，新建管理员数据库直接改
    });
    newUser.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                'status': 1,
                'msg': '注册成功'
            });
        }
    })
})

module.exports = router;
