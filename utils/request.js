// request.js

const baseUrl = 'http://127.0.0.1:5000'; // 替换成您的API基本地址

function request(url, method, params, header = {}) {
  // 获取用户的token，假设您已经实现了获取token的逻辑
  const token = wx.getStorageSync('token');

  // 设置默认请求头，包括token
  const defaultHeader = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  // 构建完整的请求URL，包括参数
  const requestUrl = baseUrl + url + buildQueryString(params);

  return new Promise((resolve, reject) => {
    wx.request({
      url: requestUrl,
      method: method,
      header: Object.assign(defaultHeader, header),
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      fail: (error) => {
        reject(error);
      }
    });
  });
}

// 辅助函数：构建查询参数字符串
function buildQueryString(params) {
  if (params && typeof params === 'object' && Object.keys(params).length > 0) {
    const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    return `?${queryString}`;
  }
  return '';
}
function wxlogin(data){
  wx.request({
    url: baseUrl+'/api/login/save',
    method: 'POST',
    header: {
      'content-type': 'application/json'
    },
    data:data,
    success: (res) => {
      console.log(res)
      if (res.statusCode === 200) {
        wx.setStorageSync('userInfo', res.data.data)
        wx.setStorageSync('token', res.data.data.token)
        wx.navigateBack({
          delta: 1
        })
      }
    },
    fail: (error) => {
      console.log(error)
    }
  })

}
module.exports = {
  get: (url, params, header) => request(url, 'GET', params, header),
  post: (url, data, header) => request(url, 'POST', data, header),
  // 添加其他请求方法，如PUT、DELETE等，根据您的需要
};
