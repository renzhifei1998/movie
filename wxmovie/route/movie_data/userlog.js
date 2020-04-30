// 引入用户集合的构造函数
const { User, validateUser } = require('../../model/user');
// 引入加密模块
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {


    let name = req.query.name;
    const email = name + '@qq.com'
    // res.send(email)



    // 根据邮箱地址查询用户是否存在
    let user = await User.findOne({ email: email });
    // 如果用户已经存在 邮箱地址已经被别人占用
    if (user) {
        return
    }
    //加密
    const salt = await bcrypt.genSalt(10);

    const password = await bcrypt.hash(name, salt);

    // 添加到数据库
    await User.create({
        username: name,
        email: email,
        password: password,
        role: 'normal',
        state: '0'
    });
}