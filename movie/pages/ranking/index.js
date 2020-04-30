// pages/ranking/index.js
import { request } from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getrankList()
  },
  getrankList() {
    request({ url: "http://localhost/record/ranking" })
      .then(result => {
        this.setData({
          rankList: result.data
        })
      })
  },

})