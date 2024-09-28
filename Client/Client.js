var http= require ('http');
var options ={
    host: 'localhost',
    port: '8080',
    path: '/data2.html'
};

var callback = function (res){
    //update data stream
    var body= '';
    res.on('data', function(data){
        body+=data;
    });

    res.on('end', function(){
        //data received compeletly
        console.log(body);
    });
}