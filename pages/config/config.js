const apiUrl = 'https://api.sephora.cn';
const mHost = 'https://m.sephora.cn';

// swiper
const getResourcesOnline = {
  "url": "/v1/marketing/MktSimpleGroupController/simpleImageGroup",
  "parpams": {
    "queryBody": {
      "locationLabel": "MOBILE:HOMEPAGE:HEROBANNER"
    }
  }
};

// button
const getResourcesOnlineBtn = {
  "url": "/v1/marketing/MktSimpleGroupController/simpleImageGroup",
  "parpams": {
    "queryBody": {
      "locationLabel": "MOBILE:HOMEPAGE:NAVIGATIONMAP"
    }
  }
};

// 新品首发
const getResourcesOnlineRecommendMobGroup = {
  "url": "/v1/marketing/MktHomePageController/recommendMobGroup ",
  "parpams": {
    "queryBody": {
      "locationLabel": "MOBILE:HOMEPAGE:NEWPRODUCTLAUNCH"
    }
  }
}

// 热销排行
const getResourcesOnlineRecommendMobGroupHotRankingList = {
  "url": "/v1/marketing/MktHomePageController/recommendMobGroup ",
  "parpams": {
    "queryBody": {
      "locationLabel": "MOBILE:HOMEPAGE:SALESRANK"
    }
  }
}

// what's new
const getResourcesOnlineRecommendMobWhatisNew = {
  "url": "/v1/marketing/MktHomePageController/recommendMobGroup",
  "parpams": {
    "queryBody": {
      "locationLabel": "MOBILE:HOMEPAGE:WHATNEW"
    }
  }
}

// 护肤品类
const getResourcesOnlineCategoryFloorGroupGuardSkinCategory = {
  "url": "/v2/marketing/MktHomePageController/categoryFloorGroup",
  "parpams": {
    "queryBody": {
      "locationLabel": "MOBILE:HOMEPAGE:SKINCARE"
    }
  }
}

// 彩妆品类
const getResourcesOnlineCategoryFloorGroupColorMakeCategory = {
  "url": "/v2/marketing/MktHomePageController/categoryFloorGroup",
  "parpams": {
    "queryBody": {
      "locationLabel": "MOBILE:HOMEPAGE:MAKEUP"
    }
  }
}

// 香氛品类
const getResourcesOnlineCategoryFloorGroupPerfumeCategory = {
  "url": "/v2/marketing/MktHomePageController/categoryFloorGroup",
  "parpams": {
    "queryBody": {
      "locationLabel": "MOBILE:HOMEPAGE:FREGRANCE"
    }
  }
}

// 获取商品详情
const getProductInfo = {
  "url": "/v1/product/product/productInfo",
}

module.exports = {
  apiUrl: apiUrl,
  mHost: mHost,

  getResourcesOnline: getResourcesOnline,
  getResourcesOnlineBtn: getResourcesOnlineBtn,
  getResourcesOnlineRecommendMobGroup: getResourcesOnlineRecommendMobGroup,
  getResourcesOnlineRecommendMobGroupHotRankingList: getResourcesOnlineRecommendMobGroupHotRankingList,
  getResourcesOnlineRecommendMobWhatisNew: getResourcesOnlineRecommendMobWhatisNew,
  getResourcesOnlineCategoryFloorGroupGuardSkinCategory: getResourcesOnlineCategoryFloorGroupGuardSkinCategory,
  getResourcesOnlineCategoryFloorGroupColorMakeCategory: getResourcesOnlineCategoryFloorGroupColorMakeCategory,
  getResourcesOnlineCategoryFloorGroupPerfumeCategory: getResourcesOnlineCategoryFloorGroupPerfumeCategory,
  getProductInfo: getProductInfo

}