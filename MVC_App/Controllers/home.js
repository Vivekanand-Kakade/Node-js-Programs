var template= require ('../View/template_main');
var test_data= require('../Model/test_data');
exports.get=function(req,res){
    var teamlist=test_data.teamlist;
    var strTeam="",i=0;
    for(i=0;i<teamlist.count;){
        strTeam=strTeam + "<li>"+teamlist.teams[i].name+"</li>";
        i++;
    }
    strTeam="<ul>"+strTeam+"</ul>";
    res.writeHead(200, {'content-type':'text/html'});
    res.write(
        template.build("Test web page on Node.js","Hello there","<p>The team in Group "+teamlist.Name+"</p>")
    )
    res.end();
}