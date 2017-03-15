var socket = io.connect('http://localhost:8080/', {'forceNew':true})


socket.on('messages', function(data){

console.log(data)

})
new Date()
console.log(Date.now())

function CheckIn(e){
	var obj = {
		"name":document.getElementById('name').value,
		"type":document.getElementById('type').value,
		"age":document.getElementById('age').value,
		"date": Date.now()	
	}

	socket.emit('checkin', obj)
	document.getElementById('name').value = "";
	document.getElementById('type').value = "";
	document.getElementById('age').value = "";
	return false
}