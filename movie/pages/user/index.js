// pages/user/index.js
import { request } from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    ceshi:{}
  },

  //接口要的参数
  userlog: {
    name: ""
  },


  onShow() {
    const userinfo = wx.getStorageSync("userinfo");
    this.setData({ userinfo });

    this.userlog.name = wx.getStorageSync("userinfo").nickName;
    console.log( userinfo)

    this.getUserList()
    // this.login()
  },

  

  async getUserList() {
    const res = await request({ url: "http://localhost/record/userlog", data: this.userlog });
    // this.setData({
    //   ceshi: res.data
    // })
  },

  // login(){
  //   wx.login({
  //     seccess:function(res){
  //       console.log(res.code)
  //     }
  //   })
  // }


})