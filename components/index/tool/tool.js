Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    search: {
      type: Boolean,
      value: false
    }
  },
  data: {
    focus1:false
  },
  methods: {
    _openSearch(){
      this.triggerEvent('openSearch')
      setTimeout(()=>{
        this.setData({
          focus1:true
        })
      },200)
    },
    _closeSearch(){
      this.triggerEvent('closeSearch')
      setTimeout(()=>{
        this.setData({
          focus1:false
        })
      },200)
    }
  }
})