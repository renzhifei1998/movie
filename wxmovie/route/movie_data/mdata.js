const { Movie } = require('../../model/movie');
var path = require('path')
module.exports = async (req, res) => {
    const movies = await Movie.find();
    // {},{limit: 2}
    //路径修改
    function churl(url) {
        return (url).replace(/\\/g, "/")
    }

    //轮播图数据
    let data = [
        {
            'img': 'http://localhost' + churl(movies[0].cover),
            'id': movies[0]._id,
            "open_type": "navigate",
            'nav_url': "/pages/show/index?id=" + movies[0]._id
        },
        {
            'img': 'http://localhost' + churl(movies[1].cover),
            'id': movies[1]._id,
            "open_type": "navigate",
            'nav_url': "/pages/show/index?id=" + movies[1]._id
        },
        {
            'img': 'http://localhost' + churl(movies[2].cover),
            'id': movies[2]._id,
            "open_type": "navigate",
            'nav_url': "/pages/show/index?id=" + movies[2]._id
        }
    ]

    res.send(data);
}