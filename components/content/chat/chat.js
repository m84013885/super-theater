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
    },
    width:{
      type: Number,
      value:265
    }
  },
  data: {
    // 这里是一些组件内部数据
  },
  attached: function () {

  },
  methods: {

  }
})