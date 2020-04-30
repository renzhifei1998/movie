const { Movie } = require('../../model/movie');

module.exports = async (req, res) => {
	// 获取要删除的电影id
	// res.send(req.query.id)
	// 根据id删除用户
	await Movie.findOneAndDelete({ _id: req.query.id });
	// 将页面重定向到用户列表页面
	res.redirect('/admin/article');
} 