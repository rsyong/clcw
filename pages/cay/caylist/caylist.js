// pages/cay/caylist/caylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  addCay:function(){
    wx.navigateTo({
      url: '../cayDetils/cayDetils',
    })
  }
})