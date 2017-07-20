// 使用 Mock
var Mock = require('mockjs');
//商户流失数据
var list = {
  "respcd": "0000",
  "respmsg": "OK",
  "resperr": "",
  "data|5-10": [{
    'url_id|+1': 1,
    'url_name': "@domain()",
    'url': "@url()"
  }]
};
Mock.mock(/nodevue\/url\/list/, 'get', list);
// var data = Mock.mock(lost_merchant);
// // 输出结果
// console.log(data)
// console.log(JSON.stringify(data, null, 4))
