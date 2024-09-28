var http= require('http');
var fs= require('fs');
var url= require('url');
http.createServer(function(req,res){
    var pathname= url.parse(req.url).pathname;

    console.log("Request for "+ pathname +" recevied.");
    fs.readFile(pathname.substring(1), function(err, data){
        if (err){
            console.log(err);
            //Http status: 404- NOT FOUND
            //content-type: text/Plain can also be used
            res.writeHead(404,{'Content-Type':"text/HTML"});
            res.write("<article>The <b><i>page</i></b> you are <i><u>trying</u></i> to <u><b>serach</b></u> does not <b><i><u>exist</u></i></b></article>");
        } else {
            //Http status: 200- OK
            //content-type: text/Plain can also be used
            res.writeHead(200,{'Content-Type':'text/HTML'});
            res.write(data.toString());
        }
        res.end();
    });
}).listen(8080);