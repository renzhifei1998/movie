const express = require('express');
//路径
const path = require('path');
//处理post请求参数
const bodyParser = require('body-parser');
//导入sexxion模块
const session = require('express-session')
//导入art-templat模板
const template = require('art-template')
//导入 dateformat模块
const dateFormat = require('dateformat')
//创建服务器
const app = express();
//引入路由 
const admin = require('./route/admin');
const record = require('./route/record');

const http = require('http');
//数据库连接
require('./model/connect');
//处理post请求
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())
//配置session
//saveUninitialized: false不自动创建cookie
app.use(session({
    secret: 'secret key',
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

//分布式
http.createServer(function (req, res) {
    res.writable(200);
    res.end("111111");
}).listen(8080)


//模板位置
app.set('views', path.join(__dirname, 'views'));
//模板后缀
app.set('view engine', 'art');
//使用模板引擎
app.engine('art', require('express-art-template'));
//向模板内部导入dateForem变量
template.defaults.imports.dateFormat = dateFormat;
//开放静态资源
app.use(express.static(path.join(__dirname, 'public')))

//拦截请求判断用户是否登陆
app.use('/admin', require('./middle/loginGuard'));

//请求路径
app.use('/admin', admin);
app.use('/record', record);

// 开放根目录下public文件夹，使得外网可以访问
app.use('/public', express.static('./public'));

//监听端口
app.listen(80);