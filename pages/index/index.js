//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    multiArray: [["上门服务"], ["外观微蜡洗", "全车微蜡洗", "全车深度精洗", "玻璃防雨镀膜", "手工双核蜡", "外观微蜡洗"]],//洗车服务类型
    adree: "调用地理位置失败",//位置获取
    multiIndex:[0,0],//选择类型初始值下标
    index_sub: 0,
    latitude: 0,//经度
    longitude: 0,//纬度
    cay: '',//车辆信息值
    back: '#E5E5E5',//按钮默认颜色
    user_img: '',//用户头像
  },
  //选择服务项目
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  choos:function(){
    wx.navigateTo({
      url: "../cay/caylist/caylist",
    })
  },
  upData: function () {
    var _this = this;
    //提交数据
    wx.request({
      url: "https://0qvzawca.qcloud.la/app/index.php?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=addorder&m=zh_jd",
      data: {
        project: 1,
        latitude: _this.data.latitude,
        longitude: _this.data.longitude,
        carNumber: "渝A360263",
      },
      method: "GET",
      success: function (res) {
        wx.showModal({
          title: '提示',
          content: JSON.stringify(res),
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },
  onReady: function () {
    var _this = this;
    //获取经纬度
    wx.getLocation({
      success: function (res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    })
    //获取头像
    wx.getUserInfo({
      success: function (res) {
        _this.setData({
          user_img: res.userInfo.avatarUrl
        })
      }
    })
    // if (_this.data.adree =="调用地理位置失败"){
    //   wx.chooseLocation({
    //     success: function (res) {
    //       _this.setData({
    //         adree: res.name
    //       })
    //     },
    //     fail: function (res) {
    //       _this.setData({
    //         adree: "调用地理位置失败"
    //       })
    //     }
    //   })
    // }
  }
})
