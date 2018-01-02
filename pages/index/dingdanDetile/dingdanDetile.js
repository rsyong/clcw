// pages/index/dingdanDetile/dingdanDetile.js
const app = getApp()
var id =null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mydata:'',
    myid:'',
    id_str:'',
    price:null,
    imgUrls:[],
    isShow:false
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
        bookingNo: _this.data.id_str,  /*订单号*/
        total_fee: _this.data.price,   /*订单金额*/
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
    id = options.id;
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
            mydata:res.data.order,
            id_str: res.data.id_str,
            price: res.data.price
          })
        }
        console.log(JSON.stringify(res))
      }
    })
  },
  xiqian:function(e){
    var ins=e.currentTarget.dataset.in
    var _this=this;
    _this.setData({
      isShow:true
    })
    wx.request({
      url: app.globalData.plickHttp + "getpicture",
      data:{
        openid: app.globalData.openid,
        id:14,
        type: ins,
      },
      success:function(res){
        console.log(JSON.stringify(res))
        if(res.data.ret==0){
          if (res.data.img.length==0){
            wx.showToast({
              title: '没有照片',
            })
            return;
          }
          _this.setData({
            imgUrls: res.data.img
          })
        }else{
          wx.showToast({
            title: '没有照片',
          })
        }
      }
    })
  },
  close:function(){
    this.setData({
      isShow:false
    })
  }
})