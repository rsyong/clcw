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
    wx.redirectTo({
      url: '../cayDetils/cayDetils',
    })
  },
  check:function(e){
    var inde=e.currentTarget.dataset.in;
    var carId2 = e.currentTarget.dataset.id;
    app.globalData.carId = this.data.caysList[inde].carNum + " " + this.data.caysList[inde].color + " " + this.data.caysList[inde].carBrand + " " + this.data.caysList[inde].carModel;
    wx.showToast({
      title: '选择成功',
    })
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];  //当前页面
    var prevPage = pages[pages.length - 2]; //上一个页面

    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      carId: app.globalData.carId,
      ids:carId2,
    })
    setTimeout(function () {
      wx.navigateBack({
        delta: 1
      })
    }, 600)
    
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