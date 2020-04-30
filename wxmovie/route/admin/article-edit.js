const { Movie } = require('../../model/movie');
module.exports = async (req, res) => {

    //标识，标示当前访问的是电影管理页面
    req.app.locals.link = 'movie';

    //获取id
    const { message, id } = req.query;


    //如果传递了id
    if (id) {
        //修改操作
        let movie = await Movie.findOne({ _id: id });

        //渲染用户修改页面
        res.render('admin/article-edit', {
            message: message,
            movie: movie,
            link: '/admin/movie-modify?id='+ id,
            button: '修改'

        });

    } else {
        //添加操作
        res.render('admin/article-edit', {
            message: message,
            link: '/admin/article-add',
            button: '添加'
        });
    }

    // res.render('admin/article-edit.art')
}