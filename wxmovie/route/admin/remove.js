const { Comment } = require('../../model/comment')
module.exports = async (req, res) => {
    // 获取要删除的评论id
    // res.send(req.query.id)
    // 根据id删除用户
    const objId = await Comment.findOne({_id: req.query.id})
    await Comment.findOneAndDelete({ _id: req.query.id });
    // res.send(objId)
    // 将页面重定向到详情页面
    res.redirect('/admin/show?id='+objId.mid);
}