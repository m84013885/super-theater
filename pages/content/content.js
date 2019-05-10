// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chat:[
      {content:'我企鹅委屈打算的气味啊撒我企鹅委屈打算的气味啊撒打算的胃打算的胃',mine:false,width:265}
    ],

    // input行数
    chatLine: 1,
    textareBottom: 0,

    // input 内容和最后宽度
    textareValue: "",
    textareWidth: "",

    chatHeight: '',
    chatWidth: 265,
    chatValue: '&nbsp;',

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
      this._nbsp = res[0].width
    })
    this._arrStr = 0
    this._chatStr = []
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
  _getChatWidth (arr) {
    let total = 0
    let max = 265
    let line = 0
    for(let i=0;i<arr.length;i++){
      total+=arr[i]
      if(total>max){
        line++
        max = total - arr[i]
        total = 0
      }
    }
    this.setData({
      chat:this.data.chat.concat(
        {content:this.data.textareValue,width:max+line,mine:true}
      ),
      textareValue:''
    })
  },
  _forCheckOneString (arr) {
    if(arr[this._arrStr]){
      this.setData({
        chatValue:arr[this._arrStr]
      })
    }
    var query = wx.createSelectorQuery()
    query.select('#chatWidth').boundingClientRect()
    query.exec((res) => {
      if(arr.length-1 < this._arrStr){
        this._getChatWidth(this._chatStr)
        this._arrStr = 0
        this._chatStr = []
      }else{
        if(res[0].width===0&&this.data.chatValue===" "){
          this._chatStr.push(this._nbsp)
        }else{
          this._chatStr.push(res[0].width)
        }
        this._arrStr++
        this._forCheckOneString(arr)
      }
    })
  },
  bindleBlur: function () {
    this.setData({
      textareBottom:0
    })
  },
  bindleConfirm: function (e) {
    if(e.detail.value){
      const value = e.detail.value
      const arr = value.split('')
      this._forCheckOneString(arr)
      this.setData({
        textareValue: e.detail.value
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})