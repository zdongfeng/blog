/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-09-01 09:52:53
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2021-09-06 14:38:47
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
                'status': 200,
                'msg': '注册成功'
            });
        }
    })
})

router.post('/api/notes/upload', (req, res) => {
    //  需要参数  title  booksName  gist content comments
    var date = new Date().getDay()
    let newNotes = new db.User({
        title: req.body.title,
        date,
        booksName: req.body.booksName,
        gist: req.body.gist,
        content: req.body.content,
        comments: []
    });
    newNotes.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                'status': 200,
                'msg': '笔记上传成功'
            });
        }
    })
})

module.exports = router;
