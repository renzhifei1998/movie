// pages/login/index.js
Page({
  handleGetUserInfo(e) {
    // console.log(e)

    const { userInfo } = e.detail;
    wx.setStorageSync("userinfo", userInfo);
    wx.navigateBack({
      delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
    });
    
  }

})