Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    image: {
      type: String,
      value: 'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',
    },
    title: {
      type: String,
      value: 'title',
    },
    text: {
      type: String,
      value: 'text',
    },
    time: {
      type: Number,
      value: 1555660333241,
    },
  },
  data: {
    // 这里是一些组件内部数据
    getTime: '0秒前'
  },
  attached: function() {
    this.setData({
      getTime:this.afterTime(this.data.time)
    })
  },
  methods: {
      // 这里是一个自定义方法
      afterTime(time){
        let mius = Date.now()-time
        if(mius<(1000*60)){
            return Math.floor(mius/1000)+'秒前'
        }else if(mius<(1000*60*60)){
            return Math.floor(mius/(1000*60))+'分钟前'
        }else if(mius<(1000*60*60*24)){
            return Math.floor(mius/(1000*60*60))+'小时前'
        }else if(mius<(1000*60*60*24*30)){
            return Math.floor(mius/(1000*60*60*24))+'天前'
        }else if(mius<(1000*60*60*24*30*12)){
            return Math.floor(mius/(1000*60*60*24*30))+'个月前'
        }else{
            return Math.floor(mius/(1000*60*60*24*30*12))+'年前'
        }
    }
  }
})