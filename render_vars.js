var http = require("http"),
	fs = require("fs");     

http.createServer(function(req,res){  /*de esta forma se va a tener que leer el fichero
										cada vez que se haga una peticón y por otra 
										parte, si se modifica el index.html no se tendra
										que reiniciar el servidor */
	fs.readFile("./index.html",function(err,html){  
		var html_string = html.toString();/*transformamos en una cadena*/

		/*expresión regular*/
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		var nombre = "Javiju";
		// variable ['nombre']
		for (var i = variables.length - 1; i >= 0; i--){
			//Lo ejecutamos como código de javaScript
			//Para obtener el valor de dicha variable
			var value =  eval(variables[i]);

			//Reemplazar el contenido con llaves {x} por su valor  correspondiente
			html_string = html_string.replace("{"+variables[i]+"}",value);
		};

		//Mandamos el contenido
		res.writeHead(200,{"content-Type":"text/html"})/*statusCode*/
		res.write(html_string); 
		res.end();
	});

}).listen(8080);

