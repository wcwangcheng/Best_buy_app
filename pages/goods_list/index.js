//引入 用来 发送请求的方法  一定要把路径补全
import { request } from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
     tabs:[
       {
         id:0,
         value:'综合',
         isActive:true
       },
       {
         id:1,
         value:'销量',
         isActive:false
       },
       {
        id:2,
        value:'价格',
        isActive:false
      }
     ],
     goodsList:[]
  },
  //接口调用参数
  QureeParams:{
   query:'',
   cid:'',
   pagenum:1,
   pagesize:10
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.QureeParams.cid=options.cid;
      this.getGoodsList()
  },
  // 获取商品列表的方法
  async getGoodsList(){
    const res=await request({url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search',data:this.QueryParams})
    console.log(res.data.message.goods);
    this.setData({
      goodsList:res.data.message.goods
    })
  },

  //  标题点击事件
  handleTabsItemChange(e){
  //  console.log(e);
  // 获取被点击的索引
  const {index}=e.detail;
  // 修改原数组
  let {tabs}=this.data;
  tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
  //赋值到data中
  this.setData({
    tabs
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