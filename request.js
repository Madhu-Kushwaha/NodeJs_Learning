const http = require('http')

http.createServer((req,res)=>{

    console.log(req.method) // browserr wale console pe nhi dikhega as that is te client side  url that's why

    if (req.url =="/"){
        res.write("<h1>Home page</h1>")
    }
    else if (req.url == "/login"){
        res.write("<h1>Login Page</h1>")
    } else {
        res.write("Other Page")
    }
    res.end("Hello jio")
}).listen(4100)