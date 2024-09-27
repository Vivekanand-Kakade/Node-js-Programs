var template=require ("../View/template_main");
exports.get=function(res, req){
    res.writeHead(404,{'Content-Type':'Text/html'});
    res.write(
        template.build('You are on wrong page, please search the right one',"its 404 code error","<p>its not available</p>")
    )
    res.end();
}