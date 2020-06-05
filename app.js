const http = require("http");
let url = require("url");

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'text/html'});
    let query = url.parse(req.url,true).query;
    res.end(query.year+ "  "+query.month);

}).listen(8080);
