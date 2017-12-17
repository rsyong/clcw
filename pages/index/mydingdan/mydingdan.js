// pages/index/mydingdan/mydingdan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  goTo:function(){
    wx.navigateTo({
      url: '../dingdanDetile/dingdanDetile',
    })
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
})