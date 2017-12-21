//app.js

App({
  globalData: {
    appid: 'wx3788b5343edda755',//appid需自己提供，此处的appid我随机编写  
    secret: '2271f80fc254e3fcc113a69277b42b6b',//secret需自己提供，此处的secret我随机编写  
    
  },  
  onLaunch: function () {
    // 展示本地存储能力
    var that = this;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: function(res) {
        if(res.code){
          var appid = 'wx3788b5343edda755'; //填写微信小程序appid  
          var secret = '2271f80fc254e3fcc113a69277b42b6b'; //填写微信小程序secret 
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx3788b5343edda755&secret=2271f80fc254e3fcc113a69277b42b6b&grant_type=authorization_code&js_code=' + res.code,
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              that.globalData.userInfo = res.data.openid
              console.log("获取openid",JSON.stringify(res)) //获取openid  
            }
          })  
        }
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    plickHttp: 'https://0qvzawca.qcloud.la/app/index.php?i=2&t=0&v=1.0&from=wxapp&c=entry&m=zh_jd&a=wxapp&do=',
    caykins:{
      kins:"",
      sunKins:""
    },
    openid:"111111111111111111",
    carId:'',
    orderId:'',
    carNum:'',
    s:'京',
  }
})