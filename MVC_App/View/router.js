var url= require ('url');
var fs= require('fs');
exports.get= function(req, res)
{
    req.requrl= url.parse(req.url, true);
    var path= req.requrl.pathname;
    if(/\.(css)$/.test(path))
    {
        res.writeHead(200, {'content-type':'text/css'});
        fs.readFile(__dirname+path, 'utf8', function(err, data)
    {
        if(err) throw err;
        res.write(data, 'utf8');
        res.end();
    });
    } else {
        if(path==='/' || path=== '/home'){
            require ('../Controllers/home').get(req,res);
        }
        else 
        {
            require ('../Controllers/404').get(req,res);
        }
    }
}