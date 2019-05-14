// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    data:[
      {image:'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',title:'测试',text:'文本',time:1555664362197},
      {image:'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',title:'测试',text:'文本',time:1555664362197},
      {image:'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',title:'测试',text:'文本',time:1555664362197},
      {image:'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',title:'测试',text:'文本',time:1555664362197},
      {image:'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',title:'测试',text:'文本',time:1555664362197},
      {image:'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',title:'测试',text:'文本',time:1555664362197},
      {image:'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',title:'测试',text:'文本',time:1555664362197},
      {image:'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',title:'测试',text:'文本',time:1555664362197},
      {image:'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',title:'测试',text:'文本',time:1555664362197},
      {image:'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',title:'测试',text:'文本',time:1555664362197},
      {image:'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',title:'测试',text:'文本',time:1555664362197},
      {image:'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',title:'测试',text:'文本',time:1555664362197}
    ],
    search:false
  },
  // 点击搜索框与关闭搜索框
  bindleOpenChangeSearch:function(){
    this.setData({
      search:true
    })
  },
  bindleCloseChangeSearch:function(){
    this.setData({
      search:false
    })
  }
})