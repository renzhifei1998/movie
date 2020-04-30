const { User } = require('../../model/user')

module.exports = async (req, res) => {

    //标识，标示当前访问的是用户管理页面
    req.app.locals.link = 'user';

    //接收客户端传递过来的当前页参数
    let page = req.query.page || 1;
    //每页数据数目
    let pagesize = 2;
    //查询用户数据数目
    let userNum = await User.find({}).count();
    let total = Math.ceil(userNum / pagesize);
    //页码开始位置
    let start = (page - 1) * pagesize;
    //查询用户信息（数据库）
    let users = await User.find({}).limit(pagesize).skip(start)
    // res.send(users);
    // 渲染用户列表模块
    res.render('admin/user', {
        users: users,
        page: page,
        total: total,
        userNum: userNum
    });
}