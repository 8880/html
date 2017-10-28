var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req, res){

  var myURL = url.parse(req.url, true);

  if (myURL.pathname === '/' && req.method === 'GET') {
    fs.readFile('./public/sy.html', 'utf8', function(err, data){
      if (!err) {
        res.writeHead(200, {"Content-Type": 'text/html'});
        res.end(data);
      }
    })
  } else if (myURL.pathname === '/stu' && req.method === 'POST') {
      fs.readFile('./test.json', 'utf8', function(err, data){
        if (!err) {
          res.writeHead(200, {"Content-Type": 'application/json'});
          res.end(data);
        }
      })
    }else if (myURL.pathname === '/js/jquery.min.js' && req.method === 'GET') {
      fs.readFile('./public/js/jquery.min.js', 'utf8', function(err, data){
        if (!err) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.end(data);
        }
      })
    }  else if (myURL.pathname === '/css/sy.css' && req.method === 'GET') {
      fs.readFile('./public/css/sy.css', 'utf8', function(err, data){
        if(!err){
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.end(data);
        }else {
          console.log(err);
        }
      })
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("<h1>Not Found!</h1>");
      }

}).listen(8000, function(){
  console.log('listen 8000 ...');
});
