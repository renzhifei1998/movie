//导入用户集合构造函数
const { User } = require('../../model/user')
//导入bcrypt
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {
    //接收请求参数
    const { email, password } = req.body;
    // console.log(req.body);
    // 没有输入邮件
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).send('<h4>邮件地址或者密码错误</h4>');
    }
    // if (password.trim().length == 0) {
    //     return res.status(400).send('<h4>邮件地址或者密码错误</h4>');
    // }
    //根据邮箱获取用户信息
    //查询到用户user为对象类型，如果没有查询到user为空
    let user = await User.findOne({ email: email });
    if (user) {
        let isValid = await bcrypt.compare(password, user.password)
        if (isValid) {
            // 将用户名存储在请求对象中
            req.session.username = user.username;
            // 将用户角色存储在session对象中
            req.session.role = user.role;
            // res.send('登陆成功');
            //将用户信息储存在locals中使得所有页面可以访问
            req.app.locals.userInfo = user;
            //重定向到用户列表页面
            res.redirect('/admin/user');
        } else {
            res.status(400).send('<h4>邮箱地址或者密码错误</h4>');
        }
    } else {
        res.status(400).send('<h4>邮箱地址或者密码错误</h4>');
    }
}
