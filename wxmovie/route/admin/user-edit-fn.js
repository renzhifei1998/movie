// 引入用户集合的构造函数
const { User, validateUser } = require('../../model/user');
// 引入加密模块
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {

    try {
        await validateUser(req.body)
    } catch (e) {
        //验证没有通过
        //e.message
        //重定向回用户添加页面
        return res.redirect(`/admin/user-edit?message=${e.message}`);
    }

    // 根据邮箱地址查询用户是否存在
    let user = await User.findOne({ email: req.body.email });
    // 如果用户已经存在 邮箱地址已经被别人占用
    if (user) {
        return res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`);
    }
    //加密
    const salt = await bcrypt.genSalt(10);

    const password = await bcrypt.hash(req.body.password, salt);
    // 替换密码
    req.body.password = password;
    // 添加到数据库
    await User.create(req.body);
    // 重定向
    res.redirect('/admin/user');
}