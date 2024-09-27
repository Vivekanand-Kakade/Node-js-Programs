var protocol= require("http");
protocol.createServer(function(req, res)
{
res.writeHead(200, {'Content-type':'Text/html'});
res.end('Welcome to the screen, You are seeing the first program in my repository on Node.js language');
}).listen(2300);
