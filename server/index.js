/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-09-01 09:52:53
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2021-09-01 10:09:22
 */
// const fs = require('fs');
// const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
const api = require('./api');

const app = express();
// const session = require('express-session');
//跨域
app.use(cors());
// app.use(session({
//     secret:'12345',
//     cookie:{maxAge:60 * 1000 * 60},
//     resave:false,
//     saveUninitialized:true
// }))

app.use(bodyParser.json());
//当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(api);

// 监听8888端口
app.listen(8888);
console.log('success listen…………');
