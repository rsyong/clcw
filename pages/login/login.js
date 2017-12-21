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
  },
  tels:function(e){
    if (e.detail.value.length > 0 && this.data.myclode > 0) {
      this.setData({
        back: "#17A1E6"
      })
    } else {
      this.setData({
        back: "#E5E5E5"
      })
    }
    this.setData({
      tel: e.detail.value
    })
  },
  clode:function(e){
    if (e.detail.value.length > 0 && this.data.tel>0){
      this.setData({
        back:"#17A1E6"
      })
    }else{
      this.setData({
        back: "#E5E5E5"
      })
    }
    this.setData({
      myclode: e.detail.value
    })
  },
  login:function(){
    var _this=this;
    if (_this.data.tel.length!=11){
      wx.showToast({
        title: '请输入正确手机号码',
      })
      return;
    }
    if (_this.data.myclode.length!=4){
      wx.showToast({
        title: '请输入正确验证码',
      })
      return;
    }
    wx.request({
      url: app.globalData.plickHttp + "login",
      data:{
        tel:_this.data.tel,
        verufyCode: _this.data.myclode,
        openid: app.globalData.openid
      },
      success:function(res){
        if(res.data.ret==0){
          wx.navigateTo({
            url: '../index/index?phone=' + _this.data.tel,
          })
        }else{
          wx.showToast({
            title: '登录失败',
          })
          return;
        }
      }
    })
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
    wx.request({
      url: app.globalData.plickHttp + "getverifycode",
      data: {
        tel: _this.data.tel,
        openid: app.globalData.openid,
      },
      success:function(res){
        if(res.data.ret==0){
          wx.showToast({
            title: '发送成功',
          })
        }else{
          wx.showToast({
            title: res.data.msg,
          })
        }
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