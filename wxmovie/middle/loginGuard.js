const guard = (req, res, next) => {
    if (req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        if (req.session.role == 'normal') {
            //普通用户
            next();
        }
        //用户是管理员登陆状态，放行
        next();
    }
}

module.exports = guard;