//引入formidable模块
const formidable = require('formidable');
const path = require('path');
const { Movie } = require('../../model/movie')

module.exports = (req, res) => {
    // 1.创建表单解析对象
    const form = new formidable.IncomingForm();
    // 2.配置上传文件存放位置
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    // 保留上传文件后缀
    form.keepExtensions = true;
    //解析表单
    form.parse(req, async (err, fields, files) => {
        //err错误对象，filelds普通表单数据，files上传相关数据
        // res.send(files.cover.path.split('public')[1])
        await Movie.create({
            moviename: fields.moviename,
            author: fields.author,
            date: fields.date,
            cover: (files.cover.path.split('public')[1]).replace(/\\/g, "/"),
            // content: (fields.content.Replace("(<[p|P](.|\\n)*?>)", "")) ,
            content: ((fields.content).replace(/<\/?p[^>]*>/gi, ''))
        });
        res.redirect('/admin/article')
    })
    // res.send('ok');
}