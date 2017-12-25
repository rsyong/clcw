//index.js
//获取应用实例
const app = getApp()
var riqi = [""];
var shjjian = [""];
var cun=[];
Page({
  data: {
    multiArray: [["上门服务"], ["外观微蜡洗", "全车微蜡洗", "全车深度精洗", "玻璃防雨镀膜", "手工双核蜡", "外观微蜡洗"]],//洗车服务类型
    multiArrayXiche: [riqi, shjjian ],
    adree: "选择地理位置",//位置获取
    multiIndex:[0,0],//选择类型初始值下标
    multiIndexXiche: [0, 0],//选择洗车时间初始值下标
    index_sub: 0,
    latitude: 0,//经度
    longitude: 0,//纬度
    cay: '',//车辆信息值
    back: '#17A1E6',//按钮默认颜色
    user_img: '',//用户头像
    model:false,//我的model
    carId:'',
    phone:'135****0000',
    int:0,
    ids:'',
  },
  //选择服务项目
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      multiIndex: e.detail.value,
      int: e.detail.value[1]
    })
  },
  bindMultiPickerChangeXiche: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndexXiche: e.detail.value
    })
  },
  bindMultiPickerColumnChange:function(e){
    var _this=this;
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = _this.data.multiArrayXiche;
    if (e.detail.column == 0 && e.detail.value>0){
      data[1] = ["0:00", "1:00", "2:00", "3:00", "4:00" , "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00",
        "13:00", "14:00", "15:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
      _this.setData({
        multiArrayXiche: data
      })
    } else if (e.detail.column == 0 && e.detail.value ==0){
      data[1] = cun;
      _this.setData({
        multiArrayXiche: data
      })
    }
  },
  choos:function(){
    wx.navigateTo({
      url: "../cay/caylist/caylist",
    })
  },
  upData: function () {
    var _this = this;
    if (!app.globalData.carId){
      wx.showToast({
        title: '请选择车辆信息',
      })
      // return;
    }
    //提交数据
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: app.globalData.plickHttp+"saveorder",
      data: {
        project: _this.data.int,
        carId: _this.data.ids,
        latitude: _this.data.latitude,
        longitude: _this.data.longitude,
        appointTime: _this.data.multiArrayXiche[0][_this.data.multiIndexXiche[0]] + " " + _this.data.multiArrayXiche[1][_this.data.multiIndexXiche[1]],
        coupon:'',
        openid: app.globalData.openid,
      },
      method: "GET",
      success: function (res) {
        wx.hideLoading();
        if (res.data.ret==0){
          app.globalData.orderId=res.data.orderId;
          wx.navigateTo({
            url: 'dingdan/dingdan',
          })
        }else{
          wx.showModal({
            title: '提示',
            content: '提交失败',
          })
        }
      }
    })
  },
  showUser:function(){
    //展示我的model
    this.setData({
      model:true
    })
  },
  closeModel:function(){
    //隐藏我的model
    this.setData({
      model: false
    })
  },
  weizhi:function(){
    var _this=this;
    wx.chooseLocation({
        success: function (res) {
          _this.setData({
            adree: res.name
          })
        },
        fail: function (res) {
          _this.setData({
            adree: "调用地理位置失败"
          })
        }
      })
  },
  shezhi:function(){
    wx.openSetting({})
  },
  onLoad: function (option) {
    var _this = this;
    if (option.phone){
      _this.setData({
        phone: option.phone
      })
    }
    //获取经纬度
    _this.setData({
      carId: app.globalData.carId
    })
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
    wx.request({
      url: app.globalData.plickHttp + "getcoupon",
      data:{
        openid: app.globalData.openid,
      },
      success:function(res){
        console.log(JSON.stringify(res))
      }
    })
    //今天的时间
    var day2 = new Date();
    day2.setTime(day2.getTime());
   var s2 = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    //明天的时间
    var day3 = new Date();
    day3.setTime(day3.getTime() + 24 * 60 * 60 * 1000);
    var s3 = day3.getFullYear() + "-" + (day3.getMonth() + 1) + "-" + day3.getDate();
    //后天的时间
    var day4 = new Date();
    day4.setTime(day4.getTime() + 24 * 60 * 60 * 1000*2);
    var s4 = day4.getFullYear() + "-" + (day4.getMonth() + 1) + "-" + day4.getDate();
    console.log(s2, s3,s4)
    riqi = [s2, s3, s4];
    var j=0;
    for (var i = day2.getHours();i<24;i++){
      shjjian[j] = day2.getHours() + (j++) +":00";
    }
    cun = shjjian;
    _this.setData({
      multiArrayXiche: [riqi, shjjian]
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
