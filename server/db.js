/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-09-01 09:52:47
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2021-09-06 14:38:49
 */
// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/blog');

//连接绑定事件
const db = mongoose.connection;
db.once('error', () => console.log('数据库连接失败'));
db.once('open', () => console.log('数据库连接成功'));

/************** 定义模式Schema **************/
//user
const userSchema = new mongoose.Schema({
    name: String,
    // password: String,
    // nickName: String,
    type: String, //1管理员，2游客
    // token: String,
    // avatar: String
})
//文章
const articleSchema = new mongoose.Schema({
    title: String, // 标题
    date: String, // 日期
    booksName: String, // 书名
    gist: String, // 主题
    content: String, // 内容
    comments: Array // 评论
})

/************** 定义模型Model **************/

const Models = {
    User: mongoose.model('User', userSchema),
    Article: mongoose.model('Article', articleSchema)
}

module.exports = Models;
