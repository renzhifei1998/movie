const express = require('express');

//管理页面路由
const admin = express.Router();


//渲染登陆页面
admin.get('/login', require('./admin/loginPage'));

//实现登陆功能
admin.post('/login', require('./admin/login'));

//创建用户列表路由
admin.get('/user', require('./admin/userPage'));

//实现退出功能
admin.get('/logout', require('./admin/logout'));

//用户编辑页面路由
admin.get('/user-edit', require('./admin/user-edit'));

//添加用户路由
admin.post('/user-edit', require('./admin/user-edit-fn'));

//电影列表路由
admin.get('/article', require('./admin/article'));

//电影编辑页面路由
admin.get('/article-edit', require('./admin/article-edit'));

//电影添加功能路由
admin.post('/article-add',require('./admin/article-add'));

//删除电影功能路由
admin.get('/delete',require('./admin/movie-delete'));

//电影修改功能路由
admin.post('/movie-modify',require('./admin/movie-modify'));

//电影详情页面路由
admin.get('/show',require('./admin/show'));

//创建评论路由
admin.post('/comment',require('./admin/comment'));

//删除评论路由
admin.get('/remove',require('./admin/remove'));
//导出
module.exports = admin;