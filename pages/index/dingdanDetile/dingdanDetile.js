// pages/index/dingdanDetile/dingdanDetile.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mydata:'',
    myid:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  quxiao:function(){
    var _this = this;
    wx.request({
      url: app.globalData.plickHttp + "cancelorder",
      data: {
        openid: app.globalData.openid,
        orderId: _this.data.myid,
      },
      success: function (res) {
        if (res.data.ret == 0) {
          wx.showToast({
            title: '取消成功',
          })
          setTimeout(function(){
            wx.navigateBack({
              
            })
          },700)
        }
      }
    })
  },
  zhifu:function(){
    var _this = this;
    wx.request({
      url: app.globalData.plickHttp + "pay",
      data: {
        bookingNo: _this.data.myid,  /*订单号*/
        total_fee: "70",   /*订单金额*/
        openid: app.globalData.openid
      },
      success: function (res) {
        console.log(JSON.stringify(res))
        wx.requestPayment({
          timeStamp: res.data.timeStamp,
          nonceStr: res.data.nonceStr,
          package: res.data.package,
          signType: res.data.signType,
          paySign: res.data.paySign,
          success: function (res) {
            console.log("支付成功" + JSON.stringify(res))
          },
          fail: function (res) {
            console.log("支付失败" + JSON.stringify(res))
          }
        })
      }
    })
  },
  onLoad: function (options) {
    var id = options.id;
    this.setData({ myid: id})
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