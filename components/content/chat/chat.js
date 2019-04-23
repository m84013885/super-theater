Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    image: {
      type: String,
      value: 'https://avatar.app-remix.com/default.jpg?imageMogr2/thumbnail/100x100/auto-orient',
    },
    content: {
      type: String,
      value: '内容',
    },
  },
  data: {
    // 这里是一些组件内部数据
    getTime: '0秒前'
  },
  attached: function() {

  },
  methods: {

  }
})