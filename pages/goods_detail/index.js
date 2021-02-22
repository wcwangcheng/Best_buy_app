//引入 用来 发送请求的方法  一定要把路径补全
import { request } from "../../request/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
     goodsObj:{}
  },
   GoodsInfo:{},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {goods_id}=options;
    console.log(goods_id);
    this.getGoodsDetail(goods_id)
  },
async getGoodsDetail(goods_id){
  const res=await request({url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',data:{goods_id}})
  console.log(res.data.message);
  this.GoodsInfo=res.data.message
 this.setData({
  goodsObj:res.data.message
 })
},
//点击轮播图放大预览
handlePrevewImage(e){
  //构造遍历要预览的图片数组
  const urls=this.GoodsInfo.pics.map(v=>v.pics_mid)
  const current=e.currentTarget.dataset.url
  wx.previewImage({
    current,
    urls,
  })
},
handlleCartAdd(){
  // console.log('ggggggggg');
  let cart=wx.getStorageSync("cart")||[];
  let index=cart.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id);
  if(index===-1){
    this.GoodsInfo.num=1;
    cart.push(this.GoodsInfo);

  }else{
    cart[index].num++;
  }
  wx.setStorageSync('cart',cart);
  wx.showToast({
    title: '加入成功',
    mask:true,
    icon:'success',

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