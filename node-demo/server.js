var http = require('http');
var fs = require('fs');
var url = require('url');
var port = process.argv[2];

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8080 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true);
  var path = request.url ;
  var query = '';
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname;
  var queryObject = parsedUrl.query;
  var method = request.method;

    console.log('得到HTTP的路径\n' + path);
    if(path == '/index'){
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.write('<!DOCTYPE>\n<html>'  + 
          '<head><link rel="stylesheet" href="/style">' +
          '</head><body>'  +
          '<h1>Node.js Server Testing</h1>' +
          '<script src="/script"></script>' +
          '</body></html>');
        response.end();
    }else if(path == '/style'){
        response.setHeader('Content-Type', 'text/css; charset=utf-8');
        response.write('body{background-color: #eee;}h1{color: orange;}');
        response.end();
    }else if(path == '/script'){
        response.setHeader('Content-Type', 'text/javascript; charset=utf-8');
        response.write('alert("这里是JS执行的")');
        response.end();
    }else{
        response.statusCode = 404;
        response.end();
    }
});


server.listen(port);
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port);