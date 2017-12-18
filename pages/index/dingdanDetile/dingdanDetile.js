// pages/index/dingdanDetile/dingdanDetile.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mydata:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var _this=this;
    wx.request({
      url: app.globalData.plickHttp + "getorderdetail",
      data:{
        openid: app.globalData.openid,
        orderId: id
      },
      success:function(res){
        if(res.data.ret==0){
          _this.setData({
            mydata:res.data.order
          })
        }
        console.log(JSON.stringify(res))
      }
    })
  },
})