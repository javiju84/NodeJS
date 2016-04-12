var http = require("http"),
	fs = require("fs");     /* variable "fs" se encarga de comunicarse con el
							sistema de fichero del ordenador  
							https://nodejs.org/api/fs.html */

/*accion asincrona*/
http.createServer(function(req,res){  /*de esta forma se va a tener que leer el fichero
										cada vez que se haga una peticón y por otra 
										parte, si se modifica el index.html no se tendra
										que reiniciar el servidor */
	fs.readFile("./index.html",function(err,html){  
		res.writeHead(200,{"content-Type":"text/html"})/*statusCode*/
		res.write(html); /*aqui manda las respuestas al navegador*/
		res.end();
	});

}).listen(8080);

