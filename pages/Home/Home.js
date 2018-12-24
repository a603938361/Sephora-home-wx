// pages/Home/Home.js

// import {NetTool} from '../NetWork/NetTool.js';
// import {RequestPar} from '../config/config.js'

var RequestPar = require('../config/config.js')
var NetTool = require('../NetWork/NetTool.js')
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categroyArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var url = app.g_Global.apiUrl;

    this.requestSwiper(url + RequestPar.getResourcesOnline.url, RequestPar.getResourcesOnline.parpams);
    this.requestSwiper(url + RequestPar.getResourcesOnlineBtn.url, RequestPar.getResourcesOnlineBtn.parpams);
    this.requestSwiper(url + RequestPar.getResourcesOnlineCategoryFloorGroupGuardSkinCategory.url, RequestPar.getResourcesOnlineCategoryFloorGroupGuardSkinCategory.parpams)
    this.requestSwiper(url + RequestPar.getResourcesOnlineCategoryFloorGroupColorMakeCategory.url, RequestPar.getResourcesOnlineCategoryFloorGroupColorMakeCategory.parpams)
    this.requestSwiper(url + RequestPar.getResourcesOnlineCategoryFloorGroupPerfumeCategory.url, RequestPar.getResourcesOnlineCategoryFloorGroupPerfumeCategory.parpams)
  },

  // 跳转PDP
  onClickProduct(res) {
    var id = res.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/Product-detail/Product?id='+id,
    })
  },

  onClickImg(res) {
    var url = res.currentTarget.dataset.url;
    wx.navigateTo({
      //  个人开发者不支持添加跳转url.
      url: '/pages/Compent-detail/Compent',
    })
  },

  onClickButton(res) {
    var buttonId = res.currentTarget.dataset.buttonid;
    wx.showToast({
      title: buttonId,
    })
  },

  requestSwiper(url, params) {
    // swiper
    NetTool.request(url, "POST", params, (res) => {
      if (params === RequestPar.getResourcesOnline.parpams) {
        this.setData({
          swiperData: res.data.results.resourceList
        })
      }

      if (params === RequestPar.getResourcesOnlineBtn.parpams) {
        this.setData({
          buttonData: res.data.results.resourceList
        })
      }

      // category
      if (params === RequestPar.getResourcesOnlineCategoryFloorGroupGuardSkinCategory.parpams) {
        app.g_Global.homeCategoryArr.splice(0, 0, res.data.results);
        this.setData({
          categroyArr: app.g_Global.homeCategoryArr
        })
      }

      if (params === RequestPar.getResourcesOnlineCategoryFloorGroupColorMakeCategory.parpams) {
        app.g_Global.homeCategoryArr.splice(1, 0, res.data.results);
        this.setData({
          categroyArr: app.g_Global.homeCategoryArr
        })
      }

      if (params === RequestPar.getResourcesOnlineCategoryFloorGroupPerfumeCategory.parpams) {
        app.g_Global.homeCategoryArr.splice(2, 0, res.data.results);
        this.setData({
          categroyArr: app.g_Global.homeCategoryArr
        })
      }
    }, (error) => {});
  },
})