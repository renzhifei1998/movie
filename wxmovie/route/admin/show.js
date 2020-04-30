const { Movie } = require('../../model/movie');
const { Comment } = require('../../model/comment')
module.exports = async (req, res) => {
    //接收电影id
    const id = req.query.id;
    //根据id查询文章详细信息
    let movie = await Movie.findOne({ _id: id });
    //查询当前文章对应的评论信息
    let comments = await Comment.find({ mid: id }).populate('uid')
    // res.send(comments)
    // return
    res.render('admin/show', {
        movie: movie,
        comments: comments
    })
}