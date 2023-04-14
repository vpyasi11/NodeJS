var httpServer = require("http")

var server = httpServer.createServer((req,res)=> {
    // setting content header
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.end("Server call ended")

})

server.listen(7000)