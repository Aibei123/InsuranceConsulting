// pages/discuss/discussAll/discuss_all.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    discuss:'',
    discuss_id:''
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that= this
    wx.getStorage({
      key: 'topic',
      success: function(res) {
        console.log("topic content")
        console.log(res)
        that.setData({
          discuss:res
        })
      },
    })
    wx.getStorage({
      key: 'topic_id',
      success: function (res) {
        console.log("topic id")
        console.log(res.data)
        that.setData({
          discuss_id: res.data
        })
      },
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})