// pages/cay/cayNum/cayNum.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shi2:false,
    shi3: false,
    shi4: false,
    shi5: false,
    shi6: false,
    shi7: false,
    value0:'',
    value1:'',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    back:"#22375B",
    active:"1",
  },
  input0:function(e){
    if (e.detail.value.length > 0) {
      this.setData({
        shi1: true,
        value0: e.detail.value
      })
    }
  },
  input1:function(e){
    if (e.detail.value.length>0){
      this.setData({
        shi2:true,
        value1: e.detail.value
      })
    }
  },
  input2: function (e) {
    if (e.detail.value.length > 0) {
      this.setData({
        shi3: true,
        value2: e.detail.value
      })
    }
  },
  input3: function (e) {
    if (e.detail.value.length > 0) {
      this.setData({
        shi4: true,
        value3: e.detail.value
      })
    }
  },
  input4: function (e) {
    if (e.detail.value.length > 0) {
      this.setData({
        shi5: true,
        value4: e.detail.value
      })
    }
  },
  input5: function (e) {
    if (e.detail.value.length > 0) {
      this.setData({
        shi6: true,
        value5: e.detail.value
      })
    }
  },
  input6: function (e) {
    if (e.detail.value.length > 0) {
      this.setData({
        value6: e.detail.value
      })
    }
  },
  upData:function(){
    if (this.data.value0 == '' || this.data.value1 == '' || this.data.value2 == '' || this.data.value3 == '' || this.data.value4 == '' || this.data.value5 == '' || this.data.value6 == ''){
      wx.showModal({
        title: '提示',
        content: '请输入完整车牌号码',
      })
      return;
    }
    app.globalData.carNum = this.data.value0 + this.data.value1 + this.data.value2 + this.data.value3 + this.data.value4 + this.data.value5 + this.data.value6;
    wx.showToast({
      title: '添加成功',
    })
    setTimeout(function(){
      wx.navigateBack({
        
      })
    },1000)
  },
  onReady:function(){
    this.setData({
      value0: app.globalData.s
    })
  },
  xuanzhong:function(e){
    this.setData({
      back: e.currentTarget.dataset.back,
      active: e.currentTarget.dataset.in,
    })
  }
})