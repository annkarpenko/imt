var http = require("http");

var srvr=http.createServer(function(req,res){
	if(req.url == "/about"){
		console.log("Requested url: " + req.url);
    }else if(req.url == "/stop"){
        srvr.close(function(){
            console.log(new Date().toLocaleString() + " - Server closed");
        });
    }
    res.end();
})

srvr.listen(3000);
