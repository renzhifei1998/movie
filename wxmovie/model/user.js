const mongoose = require('mongoose');
//导入bcrypt
const bcrypt = require('bcryptjs');
// 引入joi模块
const Joi = require('joi');
//创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    //超级管理员：root
    //普通：normal
    role: {
        type: String,
        required: true
    },
    //0正常，1停止使用
    state: {
        type: Number,
        default: 0
    }
});

//创建集合
const User = mongoose.model('User', userSchema);

async function creatUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('admin', salt);
    const user = await User.create({
        username: 'admin',
        email: 'admin@qq.com',
        password: pass,
        role: 'root',
        state: '0'
    });
}

// creatUser();

// 验证用户信息
const validateUser = user => {
    // 定义对象的验证规则
    const schema = {
        username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证规则')),
        email: Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
        role: Joi.string().valid('normal', 'root').required().error(new Error('角色值错误')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态值错误'))
    };

    // 验证
    return Joi.validate(user, schema);
}


//导出
module.exports = {
    // User: User
    User,
    validateUser
}