const { Movie } = require('../../model/movie');
const { Comment } = require('../../model/comment')
module.exports = async (req, res) => {
    // 接收客户端传递过来的请求参数
    const { content,  mid } = req.query;
    // 将评论信息存储到评论集合中
    await Comment.create({
        content: content,
        uid: "5ea7ed5aef2ba93b000d6718",
        mid: mid,
        time: new Date()
    });
    res.send(mid)
}