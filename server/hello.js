// var express = require('express')
// var app = express()
// //添加接口
// var list_data = {
//   data: [
//     { 'url_id': 111111, 'url': 'http://yaya12.com', 'url_name': '丫丫加油' },
//     { 'url_id': 222222, 'url': 'http://www.yaya12.com', 'url_name': '哈哈' },
//     { 'url_id': 33333, 'url': 'http://tsf.yaya12.com', 'url_name': '通胜坊' }
//   ]
// };
// app.get('/nodevue/url/list', function(req, res) { //这里的'/'是指的监听的访问路径，后面为回调函数 
//   res.send(list_data)
// });

// var fs = require('fs'); //读写文件
// var path = require('path'); //路径

// module.exports = function(app) {
//   //添加接口
//   var list_data = {
//     data: [
//       { 'url_id': 111111, 'url': 'http://yaya12.com', 'url_name': '丫丫加油' },
//       { 'url_id': 222222, 'url': 'http://www.yaya12.com', 'url_name': '哈哈' },
//       { 'url_id': 33333, 'url': 'http://tsf.yaya12.com', 'url_name': '通胜坊' },
//       { 'url_id': 33333, 'url': 'http://fwsm.yaya12.com', 'url_name': '福旺色母' }
//     ]
//   };
//   app.get('/nodevue/url/list', function(req, res) { //这里的'/'是指的监听的访问路径，后面为回调函数 
//     res.send(list_data)
//   });
// }


//const userApi = require('./api/userApi');
// const fs = require('fs');
// const path = require('path');
// const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// 后端api路由
//app.use('/api/user', userApi);
//添加接口
var list_data = {
  data: [
    { 'url_id': 111111, 'url': 'http://yaya12.com', 'url_name': '丫丫加油' },
    { 'url_id': 222222, 'url': 'http://www.yaya12.com', 'url_name': '哈哈' },
    { 'url_id': 33333, 'url': 'http://tsf.yaya12.com', 'url_name': '通胜坊' },
    { 'url_id': 33333, 'url': 'http://fwsm.yaya12.com', 'url_name': '福旺色母' }
  ]
};
app.get('/nodevue/url/list', function(req, res) { //这里的'/'是指的监听的访问路径，后面为回调函数 
  res.send(list_data)
});
// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
