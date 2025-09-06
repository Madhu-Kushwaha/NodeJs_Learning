const http = require('http');

const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, res) => {


    fs.readFile('html/form.html', 'utf-8', (error, data) => {
        if (error) {
          res.writeHead(500,{"content-type": 'text/plain'})
          res.end('internal server error')

          return;
        }
    res.writeHead(200, { "content-type": 'text/html' })

    if (req.url == '/') {
        res.write(data)
    } else if (req.url == '/submit') {
        let dataBody = [];
        req.on('data',(chunk) => {
            dataBody.push(chunk);
        });

        req.on('end',()=> {
            let rawData = Buffer.concat(dataBody).toString();
            let readableData = queryString.parse(rawData)
            console.log(readableData)
        })
        res.write('<h1>Data submitted</h1>')
    }
    res.end()
})
}).listen(4900)

//// Http status code 
//200 - Success
// 500-internal server error
// 404-page not foud
// 300-page redirections
// 301-page redirections