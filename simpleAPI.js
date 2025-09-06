const http = require('http')

const userData = [
    {
        name: 'tina',
        age: 30,
        email: 'tina@test.com'
    },
    {
        name: 'kajal',
        age: 31,
        email: 'kajal@test.com'
    },
    {
        name: 'rahul',
        age: 32,
        email: 'rahul@test.com'
    }
]
http.createServer((req,res)=>{
   res.setHeader("Content-Type","application/json")
   res.write(JSON.stringify(userData))
   res.end()
}).listen(4900)