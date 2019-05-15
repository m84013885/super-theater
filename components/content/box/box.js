Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    src: {
      type: String,
      value: '../../../images/content/hang.png'
    },
    text: {
      type: String,
      value: '单行输入'
    },
    click:{
      type:Function,
      value:''
    }
  },
  data: {
    // 这里是一些组件内部数据
  },
  attached: function () {
  },
  methods: {
    bindleEvent() {
      const myEventDetail = {} // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      // this.triggerEvent('click', myEventDetail, myEventOption)
      this.triggerEvent('click')
    }
  }
})