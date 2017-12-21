// pages/cay/cayDetils/cayDetils.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jianchen:[
       { text: '京' }, { text: '津' }, { text: '冀' }, { text: '晋' }, { text: '蒙' }, { text: '辽' }, { text: '吉' }, { text: '黑' }, { text: '沪' }, { text: '苏' }, { text: '浙' }, { text: '皖' }, { text: '闽' }, { text: '赣' }, { text: '鲁' }, { text: '豫' }, { text: '鄂' }, { text: '粤' }, { text: '桂' }, { text: '琼' }, { text: '川' }, { text: '贵' }, { text: '云' }, { text: '渝' }, { text: '藏' }, { text: '陕' }, { text: '甘' }, { text: '青' }, { text: '宁' }, { text: '新' }, { text: '港' }, { text: '澳' }, { text: '台' }
    ],
    chk:-1,//省份默认选中值
    chkVlue:'请选择车牌区域',
    chkColor: -1,//车辆颜色默认选中值
    chkColorVlue:'请选择汽车颜色',
    haoma: '',
    city:false,//展示省份model
    colos:false,//展示颜色model
    color:[
      { text: '黑色' }, { text: '白色' }, { text: '灰色' }, { text: '红色' }, { text: '银色' }, { text: '蓝色' }, { text: '黄色' }, { text: '绿色' }, { text: '橙色' }, { text: '米色' }, { text: '紫色' }, { text: '其他' }
    ],
    back: '#E5E5E5',//按钮默认颜色
    cheliang:'请选择车型',
    hao:'请输入车牌号码',
  },
  chesk:function(e){
    var _this=this;
    this.setData({ //车子的省份
      chk: e.target.dataset.ins,
      chkVlue: _this.data.jianchen[e.target.dataset.ins].text
    })
    app.globalData.s = _this.data.jianchen[e.target.dataset.ins].text
  },
  
  cheskCose:function(e){
    var _this=this;
    this.setData({ //车子的颜色
      chkColor: e.target.dataset.ins,
      chkColorVlue: _this.data.color[e.target.dataset.ins].text
    })
  },
  choos:function(){
    this.setData({ //选择省份
      city: true,
      colos: false,
    })
  },
  chekColr:function(){ //选择城市
    this.setData({
      city: false,
      colos: true
    })
  },
  haoma:function(e){
    this.setData({
      haoma: e.detail.value
    })
  },
  close:function(){
    this.setData({ //关闭model
      city: false,
      colos:false,
    })
  },
  suer:function(){
    var _this=this;
    if (app.globalData.caykins.kins.length<0){
      wx.showToast({
        title: '请选择车辆品牌',
      })
      return;
    }
    if (app.globalData.caykins.sunKins.length < 0){
      wx.showToast({
        title: '请选择车型',
      })
      return;
    }
    if (_this.data.chkVlue =='请选择车牌区域'){
      wx.showToast({
        title: '请选择车牌区域',
      })
      return;
    }
    if (app.globalData.carNum =='请输入车牌号码'){
      wx.showToast({
        title: '请输入车牌号码',
      })
      return;
    }
    if (_this.data.chkColorVlue =='请选择汽车颜色'){
      wx.showToast({
        title: '请选择汽车颜色',
      })
      return;
    }
    wx.request({
      url: app.globalData.plickHttp + "savecarinfo",
      data:{
        carBrand: app.globalData.caykins,
        carModel: app.globalData.caykins.sunKins,
        carNum: app.globalData.carNum,
        color: _this.data.chkColorVlue,
        openid: app.globalData.openid
      },
      success:function(res){
        console.log(JSON.stringify(res));
        if(res.data.ret==0){
          wx.showToast({
            title: '保存成功',
          })
          app.globalData.carId = res.data.carId;
          setTimeout(function(){
            wx.redirectTo({
              url: '../caylist/caylist',
            })
          },600)
        }
      }
      

    })
  }
})