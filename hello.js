var http = require("http");

var manejador = function(solicitud, respuesta){
	console.log("recibimos una nueva petición");
	respuesta.end("Hola mundo")
};

http.createServer();

var servidor = http.createServer(manejador);

servidor.listen(8080);