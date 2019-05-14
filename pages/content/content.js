// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 状态
    state:{
      // input与textarea切换，0为input，1为textarea
      changeInput:1
    },

    // 文字内容
    chat:[
      {content:'我企鹅委屈打算的气味啊撒我企鹅委屈打算的气味啊撒打算的胃打算的胃',mine:false,width:265}
    ],

    // input行数
    chatLine: 1,
    textareBottom: 0,

    // input 内容和最后宽度
    textareValue: "",

    // 测试宽度的隐藏chat_box
    chatWidth: 265,
    chatValue: '&nbsp;',

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取空格的宽度
    this._getNbsp()
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
  },
  // 点击输入框，键盘与输入框的高度
  bindleFocus: function (e) {
    if (e.detail.height) {
      this.setData({
        textareBottom: e.detail.height
      })
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
  bindleBlur: function () {
    this.setData({
      textareBottom:0
    })
  },
  // 提交输入
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
  bindleText:function(){
    const changeInput = this.data.state.changeInput
    if(changeInput===1){
      this._setState('changeInput',0)
    }else{
      this._setState('changeInput',1)
    }
  },
  _setState:function(name,total){
    let section = "state."+name
    let param = {}
    param[section] = total
    this.setData(param)
  }
})