// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chat:[
      {content:'测试',mine:false,width:265}
    ],

    // input行数
    chatLine: 1,
    textareBottom: 0,

    // input 内容和最后宽度
    textareValue: "0",
    textareWidth: "",

    chatHeight: '',
    chatWidth: 265,
    chatValue: ''
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
        chatHeight: res[0].height,
        textareValue: '',
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
  bindleChangeChatLine: function (e) {
    this.setData({
      chatLine: e.detail.lineCount
    })
  },
  bindleFocus: function (e) {
    if (e.detail.height) {
      this.setData({
        textareBottom: e.detail.height
      })
    }
  },
  bindleBlur: function (e) {
    // this.setData({
    //   textareBottom:0
    // })
    this.bindleConfirm(e)
  },
  bindleConfirm: function (e) {
    if (e.detail.value) {
      this.setData({
        textareValue: e.detail.value,
        chatValue: e.detail.value
      })
      var query = wx.createSelectorQuery();
      const height = this.data.chatHeight
      query.select('#chatWidth').boundingClientRect()
      query.exec((res) => {
        if (res[0].height != height) {
          this.checkHeight(res[0].height)
        }else{
          this.setData({
            chat:this.data.chat.concat(
              {content:this.data.textareValue,width:this.data.chatWidth,mine:true}
            ),
            textareValue:''
          })
        }
      })
    }
  },
  checkHeight(thisHeight) {
    var query = wx.createSelectorQuery()
    query.select('#chatWidth').boundingClientRect()
    query.exec((res) => {
      if (thisHeight != res[0].height) {
        this.lastCheckHeight(res[0].height)
      } else {
        this.setData({
          chatValue: this.data.chatValue.slice(0, this.data.chatValue.length - 1)
        })
        this.checkHeight(thisHeight)
      }
    })
  },
  lastCheckHeight(thisHeight){
    var query = wx.createSelectorQuery()
    query.select('#chatWidth').boundingClientRect()
    query.exec((res) => {
      if (thisHeight != res[0].height) {
        this.setData({
          chat:this.data.chat.concat(
            {content:this.data.textareValue,width:this.data.chatWidth + 1,mine:true}
          )
        })
        this.setData({
          chatWidth: 265,
          textareValue:""
        })
      } else {
        this.setData({
          chatWidth: this.data.chatWidth - 1
        })
        this.lastCheckHeight(thisHeight)
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})