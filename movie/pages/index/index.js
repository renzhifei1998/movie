import { request } from "../../request/index.js"
Page({
  date: {
    movieList: [],
    catesList: [],
    moviesList: []
  },
  onLoad: function (options) {
    this.getSwiperList();
    this.getCatesList();
    this.getMoviesList();
  },

  getSwiperList() {
    request({ url: "http://localhost/record/mdata" })
      .then(result => {
        this.setData({
          movieList: result.data
        })
      })
  },

  getCatesList() {
    request({ url: "http://localhost/record/quick" })
      .then(result => {
        this.setData({
          catesList: result.data
        })
      })
  },

  getMoviesList() {
    request({ url: "http://localhost/record/list" })
      .then(result => {
        this.setData({
          moviesList: result.data
        })
      })
  }
});