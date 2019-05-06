// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatLine:1,
    textareBottom:0,
    textareValue:"0",

    chatHeight:'',
    chatWidth:265
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var query = wx.createSelectorQuery();
    query.select('#chatWidth').boundingClientRect()
    query.exec((res) => {
      this.setData({
        chatHeight:res[0].height,
        textareValue:'',
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  // 普通执行事件
  bindleOpenChangeSearch: function () {
    this.setData({
      search: true
    })
  },
  bindleCloseChangeSearch: function () {
    this.setData({
      search: false
    })
  },
  bindleChangeChatLine:function(e){
    this.setData({
      chatLine:e.detail.lineCount
    })
  },
  bindleFocus:function(e){
    if(e.detail.height){
      this.setData({
        textareBottom:e.detail.height
      })
    }
  },
  bindleBlur:function(e){
    if(e.detail.value){
      this.setData({
        textareValue:e.detail.value
      })
      var query = wx.createSelectorQuery();
      const height = this.data.chatHeight
      query.select('#chatWidth').boundingClientRect()
      query.exec((res) => {
        //res就是 所有标签为mjltest的元素的信息 的数组
        // console.log(res);
        //取高度
        console.log(res[0].height);
        console.log(height);
        
        if(res[0].height!=height){
          this.checkHeight(res[0].height)
        }
      })
      // 265
    }
    // this.setData({
    //   textareBottom:0
    // })
  },
  bindleConfirm:function(e){
    if(e.detail.value){
      this.setData({
        textareValue:e.detail.value
      })
      var query = wx.createSelectorQuery();
      const height = this.data.chatHeight
      query.select('#chatWidth').boundingClientRect()
      query.exec((res) => {
        //res就是 所有标签为mjltest的元素的信息 的数组
        // console.log(res);
        //取高度
        // console.log(res[0].height);
        // console.log(height);
        
        if(res[0].height!=height){
          this.checkHeight(res[0].height)
        }
      })
    }
  },
  checkHeight(thisHeight){
      for(var i=0;i<10;i++){
        var query = wx.createSelectorQuery()
        query.select('#chatWidth').boundingClientRect()
        query.exec((res) => {
          if(thisHeight!=res[0].height){
            console.log(5)
          }else{
            this.setData({
              textareValue:this.data.textareValue.slice(0,this.data.textareValue.length-1)
            })
          }
        })
      }

      
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})