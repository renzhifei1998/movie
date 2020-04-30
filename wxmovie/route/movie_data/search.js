const { Movie } = require('../../model/movie');
module.exports = async (req, res) => {
    // 获取电影名字
    // res.send(req.query.moviename)
    let data = await Movie.findOne({ moviename: req.query.name });
    // 将页面重定向到用户列表页面
    if (data) {
        res.send({data})
    } else {
        return
    }

}