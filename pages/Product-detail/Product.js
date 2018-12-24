var RequestPar = require('../config/config.js')
var NetTool = require('../NetWork/NetTool.js')
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var id = options.id;
    var url = app.g_Global.apiUrl
    var params = {
      "queryBody": id
    }

    // 品牌
    NetTool.request(url + RequestPar.getProductInfo.url, "POST", params, (res) => {
      this.setData({
        brandInfo: res.data.results
      })
      console.log(this.data.brandInfo);
      wx.setNavigationBarTitle({
        title: this.data.brandInfo.productNameCN
      })
    });

    // image
    NetTool.request(url + '/v1/product/sku/skuImagePath?skuId=&productId=' + id, "GET", null, (res) => {
      this.setData({
        imageArr: res.data.results
      })
    });

    // 促销
    NetTool.request(url + '/v2/product/sku/promotion/APP/' + id + '?skuId=&skuCode=', "GET", null, (res) => {
      //console.log(res)

      this.setData({
        promoyionData: res.data.results
      })
    });


    var detParmas = {
      "queryBody": {
        "channel": "APP",
        "skuId": '',
        "productId": id
      }
    }
    NetTool.request(url + '/v1/product/product/skuDetailInfo', "POST", detParmas, (res) => {
      console.log(res)
    });
  },

  clickShare() {
    console.log('share');

    wx.showShareMenu({
      withShareTicket: true,
      success: res => {
        console.log(res)
      }
    })
  },

  onShareAppMessage: (res) => {
    // return{
    //   title: '妹子图片',
    //   path: '/pages/share/share?id=123',
    //   imageUrl: "/images/1.jpg",
    //   success: (res) => {
    //     console.log("转发成功", res);
    //   },
    //   fail: (res) => {
    //     console.log("转发失败", res);
    //   }
    // }
  },

  onClickImg(res) {

    var imgUrs = [];
    var imgsData = this.data.imageArr;
    for (var idx in imgsData) {
      var imgurl = imgsData[idx].skuImagePath;
      imgurl = imgurl + '1200x1200.jpg';
      imgUrs.push(imgurl)
    }
    var url = res.currentTarget.dataset.imgurl;
    wx.previewImage({
      current: url,
      urls: imgUrs,
    })
  }
})