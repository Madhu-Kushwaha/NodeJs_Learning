const  http = require('http');



console.log("start");
http.createServer((req,res)=>{
    // res.write("hello from backend");
    res.write("<h2>Hello madhumitari</h2>")
    res.end();    
}).listen(3000);

http.createServer((req,res)=>{
    // res.write("hello from backend");
    res.write("<h1>Hello madhuri</h1>")
    res.end();    
}).listen(4800);
console.log("end");



