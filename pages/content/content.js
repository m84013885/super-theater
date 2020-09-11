
import system from '../../utils/systemInfo'
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 状态
    state:{
      // input与textarea切换，0为input，1为textarea
      changeInput:0,
      // 工具是否显示，0为不显示，1为显示
      toolBox:0
    },

    // 文字内容
    chat:[
      {content:'我企鹅委屈打算的气味啊撒我企鹅委屈打算的气味啊撒打算的胃打算的胃',mine:false,width:265}
    ],

    // scroll位置
    scroll:0,

    // 聊天框高度
    chatContentHeight:0,

    // input行数
    chatLine: 1,

    // input 内容和最后宽度
    textareValue: "",
    inputFocus:false,
    textareFocus:false,

    // 测试宽度的隐藏chat_box
    chatWidth: 265,
    chatValue: '&nbsp;',
    chatHeight: 'auto'

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 初始化默认值
    this._focusNone = true
    // 获取空格的宽度
    this._getNbsp()
    // 获取聊天框的高度
    this._getScrollHeight()
    // 1rpx高度
    this._getRPX()
  },
  // 获取1rpx的高度
  _getRPX(){
    // 正常input框的高度
    this.setData({
      chatHeight:'1rpx'
    })
    var query = wx.createSelectorQuery();
    query.select('#chatWidth').boundingClientRect()
    query.exec((res) => {
      this._RPX = res[0].height
    })
  },
  _changeChatHeight(){
    const input = this.data.state.changeInput
    if(input===0){
      this.setData({
        chatContentHeight:100*this._RPX
      })
    }else{
      this.setData({
        chatContentHeight:(100+((chatLine-1)*60))*this._RPX
      })
    }

  },
  // 工具栏弹出时聊天框高度
  _changeChatMinHeight(){
    this.setData({
      chatContentHeight:this._chatToolHeight
    })
  },
   // 键盘弹出时聊天框高度
  _changeSetChatHeight(height){
    this.setData({
      chatContentHeight:this._chatHeight - height
    })
  },
  // 获取聊天框的高度
  _getScrollHeight(){
    // 正常input框的高度
    this.setData({
      chatHeight:'100rpx'
    })
    var query = wx.createSelectorQuery();
    query.select('#chatWidth').boundingClientRect()
    query.exec((res) => {
      this._chatHeight = system.windowHeight - res[0].height
    })
    // 工具栏的高度
    this.setData({
      chatHeight:'320rpx'
    })
    var query = wx.createSelectorQuery();
    query.select('#chatWidth').boundingClientRect()
    query.exec((res) => {
      this._chatToolHeight = this._chatHeight - res[0].height 
      this._changeChatHeight()
    })
  },
  // 获取空格的宽度
  _getNbsp(){
    var query = wx.createSelectorQuery();
    query.select('#chatWidth').boundingClientRect()
    query.exec((res) => {
      this._nbsp = res[0].width
    })
    this._arrStr = 0
    this._chatStr = []
  },
  // chat行数改变跟着改变
  bindleChangeChatLine: function (e) {
    this.setData({
      chatLine: e.detail.lineCount
    })
    if(this._focusInput){
      const chatLine = e.detail.lineCount>4?4:e.detail.lineCount
      const textareaHeight = (chatLine-1)*(this._RPX*60)
      this._changeSetChatHeight(this._keyboardHeight+textareaHeight)
    }
  },
  // 获取焦点，点击输入框，键盘与输入框的高度
  bindleFocusTextarea: function (e) {
    if (e.detail.height) {
      const chatLine = this.data.chatLine>4?4:this.data.chatLine
      const textareaHeight = (chatLine-1)*(this._RPX*60)
      this._changeSetChatHeight(e.detail.height+textareaHeight)
      this._scrollMoveDown()
      this._setState('toolBox',0)
      this._keyboardHeight = e.detail.height
    }
  },
  bindleFocusInput:function(e){
    if (e.detail.height) {
      this._changeSetChatHeight(e.detail.height)
      this._scrollMoveDown()
      this._setState('toolBox',0)
      this._focusInput = false
    }
  },
  // 宽度计算最佳宽度
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
  // 获取单字的宽度
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
  // 失去焦点，底部距离恢复
  bindleBlurInput: function () {
    this._focusInput = true
    if(this._focusNone){
      this._changeChatHeight()
    }else{
      this._focusNone = true
    }
  },
  bindleBlurTextarea:function(){
    if(this._focusNone){
      this._changeChatHeight()
    }else{
      this._focusNone = true
    }
  },
  // 提交输入
  bindleConfirm: function (e) {
    if(e.detail.value){
      const value = e.detail.value
      const arr = value.split('')
      this._forCheckOneString(arr)
      this._focusNone = false
      this.setData({
        textareValue: e.detail.value,
      })

      const changeInput = this.data.state.changeInput
      if(changeInput===1){
        this.setData({
          textareFocus: true
        })
      }else{
        this.setData({
          inputFocus: true
        })
      }
    }
  },
  // 根据输入修改值
  bindleInput:function(e){
    if(e.detail.value){
      const value = e.detail.value
      this.setData({
        textareValue: value
      })
    }
  },
  // 修改多行还是单行
  bindleText:function(){
    const changeInput = this.data.state.changeInput
    if(changeInput===1){
      this._setState('changeInput',0)
    }else{
      this._setState('changeInput',1)
    }
  },
  // 修改状态的方法
  _setState:function(name,total){
    let section = "state."+name
    let param = {}
    param[section] = total
    this.setData(param)
  },
  // 弹出工具箱
  bindleChangeToolBox:function(){
    const toolBox = this.data.state.toolBox
    if(toolBox===1){
      this._setState('toolBox',0)
      this._changeChatHeight()
    }else{
      this._focusNone = false
      this._changeChatMinHeight()
      this._setState('toolBox',1)
    }
  },
  // 关闭工具箱
  bindleCloseToolBox:function(){
    this._setState('toolBox',0)
    this._changeChatHeight()
  },
  // 自动下滑到底部
  _scrollMoveDown:function(){
    this.setData({
      scroll:100000
    })
  },
})