// pages/cay/cayDetils/cayDetils.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jianchen:[
       { text: '京' }, { text: '津' }, { text: '冀' }, { text: '晋' }, { text: '蒙' }, { text: '辽' }, { text: '吉' }, { text: '黑' }, { text: '沪' }, { text: '苏' }, { text: '浙' }, { text: '皖' }, { text: '闽' }, { text: '赣' }, { text: '鲁' }, { text: '豫' }, { text: '鄂' }, { text: '粤' }, { text: '桂' }, { text: '琼' }, { text: '川' }, { text: '贵' }, { text: '云' }, { text: '渝' }, { text: '藏' }, { text: '陕' }, { text: '甘' }, { text: '青' }, { text: '宁' }, { text: '新' }, { text: '港' }, { text: '澳' }, { text: '台' }
    ],
    chk:0,//省份默认选中值
    chkColor: 0,//车辆颜色默认选中值
    city:false,//展示省份model
    colos:false,//展示颜色model
    color:[
      { text: '黑色' }, { text: '白色' }, { text: '灰色' }, { text: '红色' }, { text: '银色' }, { text: '蓝色' }, { text: '黄色' }, { text: '绿色' }, { text: '橙色' }, { text: '米色' }, { text: '紫色' }, { text: '其他' }
    ],
    back: '#E5E5E5',//按钮默认颜色
  },
  chesk:function(e){
    this.setData({ //车子的省份
      chk: e.target.dataset.ins
    })
    console.log(this.data.jianchen[e.target.dataset.ins].text)
  },
  cheskCose:function(e){
    this.setData({ //车子的颜色
      chkColor: e.target.dataset.ins
    })
    console.log(this.data.color[e.target.dataset.ins].text)
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
  close:function(){
    this.setData({ //关闭model
      city: false,
      colos:false,
    })
  }
})