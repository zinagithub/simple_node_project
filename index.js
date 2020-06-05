const http = require("http");
let url = require("url");
var fs = require("fs");


http.createServer((req,res)=>{
    var query = url.parse(req.url, true);
    var filename =  query.pathname ;
    
    if (filename === '/' || filename === '/about' || filename === '/contact-me' ){
        if (filename === '/')
            filename = "index.html"
        if (filename === '/about')
            filename = "about.html"
        if (filename === '/contact-me')
            filename = "contact-me.html"
    
    } 
    else
        filename = '404.html';           

    fs.readFile(filename, (err, data)=>{
           
            if (err){
                res.writeHead(404, {"Content-Type": "text/html"});
                return res.end('Some thing went wrong!');
            }        
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        
    });
}).listen(8080);
