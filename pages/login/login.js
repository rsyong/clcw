// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:"获取验证码"
  },
  code:function(){
    var num=30;
    var _this=this;
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
  }
})