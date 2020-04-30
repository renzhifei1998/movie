// pages/comment/index.js
import { request } from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpValue: ""
  },
  comData: {
    content: '',
    mid: ''
  },
  formSubmit(e) {
    // 获取当前小程序的页面栈
    let pages = getCurrentPages();
    // 数组中索引最大的页面--当前页面
    let currentPage = pages[pages.length - 1];
    // 打印出当前页面中的 options
    this.comData.mid = currentPage.options.id;

    this.comData.content = e.detail.value.input

    //判断
    if (this.comData.content.trim()) {
      //发送数据
      this.toData(this.comData)
    } else {
      wx.showToast({
        title: '请输入内容',
        icon: 'none',
        mask: true,
      });
    }
    //返回
    wx.navigateBack({
      delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
    });
  },
  // 发送数据
  async toData(comdata) {
    const res = await request({ url: "http://localhost/record/getcom", data: comdata })
    console.log(res.data);
  },
})