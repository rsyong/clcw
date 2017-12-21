// pages/cay/cayKinds/cayKinds.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo:[
      { imgs:"http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg",title:'奥迪'},
      { imgs: "http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg", title: '宝马' },
      { imgs: "http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg", title: '奥迪' },
      { imgs: "http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg", title: '宝马' },
      { imgs: "http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg", title: '奥迪' },
      { imgs: "http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg", title: '宝马' },
      { imgs: "http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg", title: '奥迪' },
      { imgs: "http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg", title: '宝马' },
    ],
    scroll:0,
    zimu: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"],
    isShow:false,
    rightList:[
      // { imgs:'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg',text:'宝马'},
      // { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '奥迪' },
    ],
    hot:[
      // {title:'A',list:[
      //   { imgs:'http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg',text:'奥迪'},
      //   { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '宝马' }
      // ]},
    ],
    zi:1,
  },
  scrools:function(e){
    //item列表点击滚动距离
    var _this=this;
    var title = e.target.dataset.in;
    console.log(_this.data.hot)
    var myins=null;
    for (var i in _this.data.hot){
      if (_this.data.hot[i].title == title){
        myins = _this.data.hot[i].ins;
      }
    }
    if (myins==null){
      return;
    }
    _this.setData({
      scroll: myins
    })
  },
  onReady:function(){
    var _this = this;
    //获取车型数据
    wx.showLoading({
      title:'加载中..'
    })
    wx.request({
      url: app.globalData.plickHttp + "getcarbrand",
      success: function (res) {
        wx.hideLoading();
        if (res.data.ret == 0) {
          _this.setData({
            hot:res.data.brandArr
          })
          //设置相对应滚动距离顶部距离
          var num = 0;
          for (var i = 0; i < _this.data.hot.length; i++) {
            _this.data.hot[i].ins = num;
            var lengs = _this.data.hot[i].list.length;
            var ints = 31;
            ints += lengs * 51;
            num += ints;
          }
          
        } else {
          wx.showToast({
            title: '数据加载失败',
          })
        }
      }
    })
  },
  items:function(e){
    var _this = this;
    wx.showLoading({
      title: '加载中.',
    })
    app.globalData.caykins.kins = e.currentTarget.dataset.xing;
    _this.setData({
      isShow: true,
      zi: e.currentTarget.dataset.id
    })
    wx.request({
      url: app.globalData.plickHttp + "getcarmodel",
      data:{
        parentid: _this.data.zi
      },
      success:function(res){
        wx.hideLoading();
        if (res.data.modelArr.length==0){
          wx.showToast({
            title: '暂无数据，已为你选择车型为' + app.globalData.caykins.kins,
          })
          var pages = getCurrentPages();
          var prevPage = pages[pages.length - 2];
          prevPage.setData({
            cheliang: "车型为："+app.globalData.caykins.kins
          })
          setTimeout(function(){
            wx.navigateBack({
              
            })
          },800)
          return;
        }
        _this.setData({
          rightList:res.data.modelArr
        })
      }
    })
  },
  close:function(){
    this.setData({
      isShow:false
    })
  },
  chesk:function(e){
    var cx = e.currentTarget.dataset.xing;
    wx.showToast({
      title: '选择成功',
    })
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    prevPage.setData({
      cheliang: "车型为：" + cx+" "+ app.globalData.caykins.kins
    })
    setTimeout(function(){
      wx.navigateBack({
        
      })
    }, 800)
  }
})