import { request } from "../../request/index.js"
Page({
  date: {
    showList: [],
    commentList: [],
    isCollect: false,
    log: false
  },


  //收藏数据
  MovieInfo: {},

  onShow: function () {

    //登陆信息
    const userinfo = wx.getStorageSync("userinfo");
    if (userinfo) {
      this.setData({
        log: true
      });
    }
    // this.idParams = options;
    // 获取当前小程序的页面栈
    let pages = getCurrentPages();
    // 数组中索引最大的页面--当前页面
    let currentPage = pages[pages.length - 1];
    // 打印出当前页面中的 options
    let options = currentPage.options;
    let idParams = options;
    let movieId = options.id;

    this.getShowList(idParams);

    // var newmovie = wx.getStorageSync(movieId);
    // let collect = wx.getStorageSync("collect");
    // let index = collect.findIndex(v => v._id === this.MovieInfo._id);
    // // // 已存在
    // if (index !== -1) {
    //   this.setData({
    //     isAdd: true,
    //   })
    //   this.getShowList(idParams);
    // }
    // else {
    //   this.setData({
    //     isAdd: false
    //   })
    //   this.getShowList(idParams);
    // }


  },




  //根据id查询电影信息
  async getShowList(idParams) {
    const res = await request({ url: "http://localhost/record/show", data: idParams });
    const com = await request({ url: "http://localhost/record/comment", data: idParams });
    this.MovieInfo = res.data
    console.log(res.data)
    //获取收藏数组
    let collect = wx.getStorageSync("collect") || [];
    //判断是否被收藏
    let isCollect = collect.some(v => v._id === this.MovieInfo._id);


    // console.log(this.MovieInfo)
    this.setData({
      showList: res.data,
      commentList: com.data,
      isCollect: isCollect
    })
    // console.log(this.data.showList)
  },

  //收藏
  addFavorites() {
    let isCollect = false;
    let collect = wx.getStorageSync("collect") || [];
    let index = collect.findIndex(v => v._id === this.MovieInfo._id);
    if (index !== -1) {
      collect.splice(index, 1);
      isCollect = false;
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        mask: true,
      });
    } else {
      collect.push(this.MovieInfo);
      isCollect = true;
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        mask: true,
      });
    }

    wx.setStorageSync("collect", collect);
    this.setData({
      isCollect: isCollect
    })
  },

  //投票
  async addBest() {
    // 获取当前小程序的页面栈
    let pages = getCurrentPages();
    // 数组中索引最大的页面--当前页面
    let currentPage = pages[pages.length - 1];
    // 打印出当前页面中的 options
    let options = currentPage.options;
    let idParams = options;

    const res = await request({ url: "http://localhost/record/vote", data: idParams });

    if (res.data == 1) {
      wx.showToast({
        title: '请勿重复投票',
        icon: 'none',
        mask: true,
      });
    } else {
      wx.showToast({
        title: '投票成功',
        icon: 'success',
        mask: true,
      });
    }


  },

});
