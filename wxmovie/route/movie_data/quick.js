module.exports = (req, res) => {
    //轮播图数据
    let data =
        [
            {
                "name": "排行",
                "image_src": "http://localhost/admin/images/phb.png",
                "nav_url": "/pages/ranking/index"
            },
            {
                "name": "收藏",
                "image_src": "http://localhost/admin/images/sc.png",
                "nav_url": "/pages/Collection/index"
            },
            {
                "name": "我的",
                "image_src": "http://localhost/admin/images/me.png",
                "nav_url": "/pages/user/index"
            }
        ]

    res.send(data)
}