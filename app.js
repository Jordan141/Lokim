const http = require('http')
const fs = require('fs')
const PORT = process.argv[2] || 3000;

http.createServer((req, res) => {

    if(req.url === '/'){
        fs.createReadStream(__dirname +'/index.htm').pipe(res)
    }

    else if(req.url === '/api'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.end(JSON.stringify(obj))
    }
    else{
    res.writeHead(404)
    res.end()
    }

}).listen(PORT, '127.0.0.1')