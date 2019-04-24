Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    image: {
      type: String,
      value: 'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',
    },
    content: {
      type: String,
      value: '90182390718939012890$%@#q!说委屈w_eq.w e——ertrwqe',
    },
    mine: {
      type: Boolean,
      value: false
    }
  },
  data: {
    // 这里是一些组件内部数据
    width: '526rpx'
  },
  attached: function () {
    this.contentWidth()
  },
  methods: {
    contentWidth() {
      // const query = wx.createSelectorQuery().in(this)
      // query.select('#textwidth').fields({
      //   size: true
      // },function(res){
      //   console.log(res)
      // }).exec()
      // var dom = wx.createIntersectionObserver(this)
      // const a = IntersectionObserver.relativeTo('#textwidth')
      // console.log(a)
      // wx.createSelectorQuery().select('#textwidth').boundingClientRect(function(res){
      //   console.log(res) // 这个组件内 #the-id 节点的上边界坐标
      // }).exec()
      // const content = this.data.content
      // const texts = content.split('')
      // var query = wx.createSelectorQuery().in(this)
      // console.log(query)
      // const width= query.select('#textwidth').boundingClientRect(function(rect){
      //   console.log(rect)   // 节点的宽度
      // }).exec()
      // console.log(width)
      // const textsWidth = texts.map((content,index)=>{

      // })
    }
  }
})