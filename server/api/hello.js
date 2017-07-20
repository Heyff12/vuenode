module.exports = function(app) {
  //添加接口
  var list_data = {
    data: [
      { 'url_id': 111111, 'url': 'http://yaya12.com', 'url_name': '丫丫加油' },
      { 'url_id': 222222, 'url': 'http://www.yaya12.com', 'url_name': '哈哈' },
      { 'url_id': 33333, 'url': 'http://tsf.yaya12.com', 'url_name': '通胜坊' },
      { 'url_id': 444444, 'url': 'http://fwsm.yaya12.com', 'url_name': '福旺色母' },
      { 'url_id': 555555, 'url': 'http://jzzx.yaya12.com', 'url_name': '降至中心' }
    ]
  };
  app.get('/nodevue/url/list', function(req, res) { //这里的'/'是指的监听的访问路径，后面为回调函数 
    res.send(list_data)
  });
}
