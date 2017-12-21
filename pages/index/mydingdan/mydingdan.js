// pages/index/mydingdan/mydingdan.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dingdan:'',
  },
  goTo:function(e){
    wx.navigateTo({
      url: '../dingdanDetile/dingdanDetile?id=' + e.currentTarget.dataset.id,
    })
  },
  zhifu:function(e){
    var _this=this;
    wx.requestPayment({
      timeStamp: "",
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
    })
  },
  quxiao:function(e){
    var _this = this;
    wx.request({
      url: app.globalData.plickHttp + "cancelorder",
      data:{
        openid: app.globalData.openid,
        orderId: e.currentTarget.dataset.id,
      },
      success:function(res){
        if(res.data.ret==0){
          wx.showToast({
            title: '取消成功',
          })
          _this.ajax();
        }
      }
    })
  },
  ajax:function(){
    var _this = this;
    wx.request({
      url: app.globalData.plickHttp + "getorderlist",
      data: {
        openid: app.globalData.openid,
      },
      success: function (res) {
        console.log(JSON.stringify(res))
        if (res.data.ret == 0) {
          _this.setData({
            dingdan: res.data.orderArr
          })
        } else {
          wx.showToast({
            title: '获取订单失败',
          })
        }

      }
    })
  },
  onReady:function(){
    var _this=this;
    _this.ajax();
  }
})