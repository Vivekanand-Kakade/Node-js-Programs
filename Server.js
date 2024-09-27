var express= require ("express");
var app= express();
var fs= require ("fs");

app.get('/listCustomers',function(req,res)
{
    fs.readFile(__dirname+"/"+"customer.json","utf8",function(err,data)
{
    console.log(data);
    res.end(data);
});
});

var server= app.listen(4003,function(){
    var host=server.address().address;
    var port= server.address().port;
    console.log("Example app listening at https://%s:%s",host,port)
});