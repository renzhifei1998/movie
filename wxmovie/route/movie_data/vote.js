// 将评论集合构造函数进行导入
const { Movie } = require('../../model/movie');
const { User } = require('../../model/user')
module.exports = async (req, res) => {
    // 接收客户端传递过来的请求参数
    let idData = req.query.id
    let use = await User.findOne({ username: 'Memory' });
    let oneData = await Movie.findOne({ _id: idData });
    if (oneData.uid) {
        res.send('1')
    } else {
        await Movie.updateOne({ _id: idData }, {
            uid: use._id,
            mark: oneData.mark + 1
        });
        let data = await Movie.findOne({ _id: idData });
        res.send('2')
    }

}