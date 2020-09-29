
//引入 用来 发送请求的方法  一定要把路径补全
import { request } from "../../request/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList: [],
    catesList: [],
    //楼层数据
    floorList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //页面开始加载时候触发
  onLoad: function (options) {
    // 1. 发送异步请求获取轮播图数据    优化的手段可以通过es6的promise来解决这个问题
    // var reqTask = wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     this.setData({
    //       swiperList: result.data.message
    //     })
    //     console.log(result);
    //   },

    // });

    //获取轮播图数据
    this.getSwiperList()
    //获取导航分类数据
    this.getCatesList()
    //获取楼层数据
    this.getFloorList()

  },
  //获取轮播图数据
  getSwiperList () {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata' })
      .then(result => {
        this.setData({
          swiperList: result.data.message
        })
      })
  },
  //获取导航分类数据
  getCatesList () {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems' })
      .then(result => {
        this.setData({
          catesList: result.data.message
        })
      })
  },
  //获取楼层数据
  getFloorList () {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata' })
      .then(result => {
        this.setData({
          floorList: result.data.message
        })
      })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})