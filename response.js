// const http = require('http')

// const server = http.createServer((req,resp) => {
//     resp.end('Madhu kushwaha')
// })
// server.listen(4800)

const http = require('http')

const server = http.createServer((req,res) => {
  res.setHeader("ContentType","text/json");
  res.write("<h2>Hello mk2</h2>")
   res.end('Mkiooer')
//    process.exit();

})
server.listen(4800)