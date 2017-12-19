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
    zimu: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"],
    isShow:false,
    rightList:[
      { imgs:'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg',text:'宝马'},
      { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '奥迪' },
    ],
    hot:[
      {title:'A',list:[
        { imgs:'http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg',text:'奥迪'},
        { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '宝马' }
      ]},
      {
        title: 'B', list: [
          { imgs: 'http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg', text: '奥迪' },
          { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '宝马' }
        ]
      },
      {
        title: 'C', list: [
          { imgs: 'http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg', text: '奥迪' },
          { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '宝马' }
        ]
      },
      {
        title: 'D', list: [
          { imgs: 'http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg', text: '奥迪' },
          { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '宝马' }
        ]
      },
      {
        title: 'E', list: [
          { imgs: 'http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg', text: '奥迪' },
          { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '宝马' }
        ]
      },
      {
        title: 'F', list: [
          { imgs: 'http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg', text: '奥迪' },
          { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '宝马' }
        ]
      },
      {
        title: 'G', list: [
          { imgs: 'http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg', text: '奥迪' },
          { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '宝马' }
        ]
      },
      {
        title: 'H', list: [
          { imgs: 'http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg', text: '奥迪' },
          { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '宝马' }
        ]
      },
      {
        title: 'I', list: [
          { imgs: 'http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg', text: '奥迪' },
          { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '宝马' }
        ]
      },
      {
        title: 'J', list: [
          { imgs: 'http://img2.imgtn.bdimg.com/it/u=2655424870,2550065948&fm=27&gp=0.jpg', text: '奥迪' },
          { imgs: 'http://img3.imgtn.bdimg.com/it/u=2177015270,2919273641&fm=27&gp=0.jpg', text: '宝马' }
        ]
      },
    ]
  },
  scrools:function(e){
    //item列表点击滚动距离
    var _this=this;
    var title = e.target.dataset.in;
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
    //设置相对应滚动距离顶部距离
    var num=228;
    for (var i = 0; i < _this.data.hot.length;i++){
      _this.data.hot[i].ins = num;
      var lengs = _this.data.hot[i].list.length;
      var ints=31;
      ints += lengs*51;
      num += ints;
    }
    //获取车型数据
    wx.request({
      url: app.globalData.plickHttp + "getcarbrand",
      success:function(res){
        if(res.data.ret==0){

        }else{
          wx.showToast({
            title: '数据加载失败',
          })
        }
        console.log(JSON.stringify(res))
      }
    })
  },
  items:function(){
    this.setData({
      isShow: true
    })
  },
  close:function(){
    this.setData({
      isShow:false
    })
  },
  chesk:function(){
    
  }
})