var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static('public'))
app.get('/', function(req,res){
	res.status(200).send()
})
io.on('connection', function(socket){
	

	socket.on('checkin', function(data){
		io.sockets.emit('checked', data)
	})

	
})
server.listen(8080, function(){
	console.log("Servidor Corriedo");
})