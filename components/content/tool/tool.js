Component({
  properties: {
    chatLine: {
      type: Number,
      value: 1,
    }
  },
  data: {

  },
  attached: function () {

  },
  methods: {
    bindleChangeToolBox() {
      const myEventDetail = {} // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      // this.triggerEvent('click', myEventDetail, myEventOption)
      this.triggerEvent('click')
    }
  }
})