const { Movie } = require('../../model/movie');
module.exports = async (req, res) => {
    // 获取电影id
    // res.send(req.query.id)
    let data = await Movie.findOne({ _id: req.query.id });
    // 将页面重定向到用户列表页面
    res.send(data)
}