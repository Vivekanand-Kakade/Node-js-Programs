var https_port= 2301;
var http= require ('http');
var start= function(){
    var server=http.createServer(function(res,req){
        require('./router').get(res,req);
    });
    server.listen(https_port);
    console.log(`Listening to http://localhost: ${https_port}`);
};
exports.start= start;