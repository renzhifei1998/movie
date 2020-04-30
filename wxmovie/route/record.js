const express = require('express');


const record = express.Router();

//电影数据
record.get('/mdata', require('./movie_data/mdata'))
//导航数据
record.get('/quick', require('./movie_data/quick'))
//列表数据
record.get('/list', require('./movie_data/list'))
//排行榜
record.get('/ranking', require('./movie_data/ranking'))
//详情
record.get('/show', require('./movie_data/show'))
//登陆
record.get('/userlog', require('./movie_data/userlog'))
//投票
record.get('/vote', require('./movie_data/vote'))
//评论
record.get('/comment', require('./movie_data/comment'))
//搜索
record.get('/search', require('./movie_data/search'))
//提交评论
record.get('/getcom',require('./movie_data/getcom'))

//导出
module.exports = record;