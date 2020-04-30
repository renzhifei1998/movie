// pages/Collection/index.js
import { request } from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collect: [],
    log: false
  },

  onShow: function () {
    //登陆信息
    const userinfo = wx.getStorageSync("userinfo");
    if (userinfo) {
      const collect = wx.getStorageSync("collect") || [];
      this.setData({
        collect,
        log: true
      });
    } else {
      this.setData({
        log: false
      })
    }

  },

})