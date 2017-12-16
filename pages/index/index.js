//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: [["上门服务"], ["外观微蜡洗", "全车微蜡洗", "全车深度精洗", "玻璃防雨镀膜", "外观微蜡洗", "外观微蜡洗", "外观微蜡洗", "外观微蜡洗", "外观微蜡洗", "外观微蜡洗", "外观微蜡洗", "外观微蜡洗", "外观微蜡洗", "外观微蜡洗"]],
    adree:"调用地理位置失败",
    index: 0,
    latitude:0,//经度
    longitude: 0,//纬度
    cay:'',
    back:'#E5E5E5'
  },
  //选择服务项目
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindKeyInput:function(e){
    this.setData({
      cay: e.detail.value
    })
    //有车辆信息才能提交
    if (this.data.cay.length>0){
      this.setData({
        back:"#17A1E6"
      })
    }else{
      this.setData({
        back: "#E5E5E5"
      })
    }
  },
  upData:function(){
    var _this=this;
    //提交数据
    wx.request({
      url: "https://0qvzawca.qcloud.la/app/index.php?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=addorder&m=zh_jd",
      data:{
        project:1,
        latitude: _this.data.latitude,
        longitude: _this.data.longitude,
        carNumber: "渝A360263",
      },
      method:"GET",
      success:function(res){
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
  onLoad:function(){
    var _this=this;
    //获取经纬度
    wx.getLocation({
      success: function(res) {
        _this.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })
      },
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
