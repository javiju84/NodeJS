var http = require("http"),
	fs = require("fs");     /* variable "fs" se encarga de comunicarse con el
							sistema de fichero del ordenador  
							https://nodejs.org/api/fs.html */

var html = fs.readFileSync("./index.html");

http.createServer(function(req,res){
	res.write(html);
	res.end();

}).listen(8080);