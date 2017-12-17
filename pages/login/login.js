// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:"获取验证码",
    tel:'',
    myclode:'',
    oppid:'1111111',
  },
  tels:function(e){
    this.setData({
      tel: e.detail.value
    })
  },
  clode:function(e){
    this.setData({
      myclode: e.detail.value
    })
  },
  login:function(){
    var _this=this;
    
    console.log(this.data.tel, this.data.myclode)
  },
  code:function(){
    var num=30;
    var _this=this;
    if (_this.data.tel.length<11){
      wx.showToast({
        title: '请输入正确手机号码',
      })
      return;
    }
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        console.log(222,res.data)
        _this.setData({
          oppid:res.data
        })
      }
    })
    
    wx.request({
      url: app.globalData.plickHttp + "getverifycode",
      data: {
        tel: _this.data.tel,
        openid: _this.data.oppid,
      },
      success:function(res){
        console.log(JSON.stringify(res))
      }
    })
    //n秒后再试
    var time=setInterval(function(){
      _this.setData({
        code: --num+"秒后再试"
      })
      if (num==0){
        clearInterval(time);
        _this.setData({
          code:"获取验证码"
        })
      }
    },1000)
  },
  onLoad:function(){
    
  }
})