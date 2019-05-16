
let system
wx.getSystemInfo({
    success(res) {
        system = res
    //   console.log(res.model)
    //   console.log(res.pixelRatio)
    //   console.log(res.windowWidth)
    //   console.log(res.windowHeight)
    //   console.log(res.language)
    //   console.log(res.version)
    //   console.log(res.platform)
    }
})
export default system