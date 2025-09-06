const http = require('http');
const userForm = require('./userForm');
http.createServer((req,res)=> {
//  res.end("hello mk")
res.writeHead(200,{"content-type": "text/html"})
userForm(req,res)
res.end();
}).listen(3120)