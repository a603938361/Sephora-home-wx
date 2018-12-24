

function request(url, method, params, success, fail){
  
  wx.request({
    url: url,
    data: params,
    method: method,
    headers: {
      'Content-Type': 'json'
    },
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    }
  })
}

module.exports = {
  request: request
}