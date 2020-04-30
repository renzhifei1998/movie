// pages/search/index.js
import { request } from "../../request/index.js"
Page({
  data: {
    goods: [],
    // 取消按钮是否显示
    isFocus: false,
    //输入框的值
    inpValue: ""
  },
  TimeId: -1,
  //输入框的值改变就会触发的事件
  handleInput(e) {
    //获取输入框的值
    const { value } = e.detail;
    // console.log(value)
    //检查
    if (!value.trim()) {
      this.setData({
        goods: [],
        isFocus: false
      })
      return;
    };
    //发送请求获取数据
    this.setData({
      isFocus: true
    });
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(() => {
      this.qsearch(value)
    }, 1000);

  },
  //发送请求
  async qsearch(moviename) {
    const res = await request({ url: "http://localhost/record/search", data: { name: moviename } })
    console.log(res.data);
    this.setData({
      goods: res.data
    })
  },
  handleCancel() {
    this.setData({
      inpValue: "",
      isFocus: false,
      goods: []
    })
  }
})