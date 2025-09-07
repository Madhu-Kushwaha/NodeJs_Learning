const http = require('http');
http.createServer((req,res)=> {
   res.write("page check")
   res.end();
}).listen(3200)