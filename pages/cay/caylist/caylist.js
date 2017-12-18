// pages/cay/caylist/caylist.js.
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    caysList:'',
  },
  addCay:function(){
    wx.navigateTo({
      url: '../cayDetils/cayDetils',
    })
  },
  check:function(e){
    var inde=e.currentTarget.dataset.in;
    app.globalData.carId = this.data.caysList[inde].carNum + " " + this.data.caysList[inde].color + " " + this.data.caysList[inde].carBrand + " " + this.data.caysList[inde].carModel;
    wx.showToast({
      title: '选择成功',
    })
    setTimeout(function () {
      wx.navigateBack({
        delta: 1
      })
    }, 1000)
    
  },
  onReady:function(){
    var _this=this;
    wx.showLoading({
      
    })
    wx.request({
      url: app.globalData.plickHttp + "getsavedcar",
      data:{
        openid: app.globalData.openid
      },
      success:function(res){
        wx.hideLoading();
        if(res.data.ret==0){
          _this.setData({
            caysList: res.data.carInfoArr
          })
        }
        
        console.log(JSON.stringify(res))
      }
    })
  }
})