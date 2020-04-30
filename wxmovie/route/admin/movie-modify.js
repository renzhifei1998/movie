//引入formidable模块
const formidable = require('formidable');
const path = require('path');
const { Movie } = require('../../model/movie')
/* module.exports = async (req, res) => {
    //接收修改参数
    const { moviename, author, content } = req.body;
    //要修改的电影id
    const id = req.query.id;

    let movie = await Movie.findOne({ _id: id });

    res.send({ moviename, author, content })

    //更新信息
    // await Movie.updateOne({ _id: id }, body);

    // res.redirect('/admin/article');
    // res.send(movie)
} */

module.exports = async (req, res) => {
    // 1.创建表单解析对象
    const form = new formidable.IncomingForm();
    // 2.配置上传文件存放位置
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    // 保留上传文件后缀
    form.keepExtensions = true;

    //要修改的电影id
    const id = req.query.id;

    let movie = await Movie.findOne({ _id: id });

    // res.send(movie)

    function kong(mdf, mov) {

        if (!mdf || mdf == "<p>&nbsp;</p>") {
            return mdf = mov
        } else {
            return mdf
        }

    };


    //解析表单
    form.parse(req, async (err, fields, files) => {
        //err错误对象，filelds普通表单数据，files上传相关数据
        // res.send(files.cover.path.split('public')[1])
        // res.send(fields)
        await Movie.updateOne({ _id: id }, {
            moviename: kong(fields.moviename, movie.moviename),
            author: kong(fields.author, movie.moviename),
            date: kong(fields.date, movie.date),
            cover: kong((files.cover.path.split('public')[1]).replace(/\\/g, "/"), movie.cover),
            content: ((fields.content).replace(/<\/?p[^>]*>/gi, ''))
        });
        res.redirect('/admin/article')
    })
    // res.send('ok');
}