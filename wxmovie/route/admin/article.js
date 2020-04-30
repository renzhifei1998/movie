//将电影集合的构造函数导入
const { Movie } = require('../../model/movie');
//导入 mongoose-sex-page模块
const pagination = require('mongoose-sex-page')

module.exports = async (req, res) => {
    //接收页码
    const page = req.query.page;
    //标识，标示当前访问的是电影管理页面
    req.app.locals.link = 'movie';

    //page:当前页 size:每页显示条数 display:页码数量
    //exec:向数据库发送查询请求
    //查询所有文章数据
    let movies = await pagination(Movie).find().page(page).size(2).display(4).exec();

    // res.send(movies)
    // 渲染电影列表页面
    res.render('admin/article.art', {
        movies: movies
    })
}