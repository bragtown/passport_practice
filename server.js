var express = require('express')  //require express
var config = require('./server/configure')  //require all other modules and use them
var app = express();  //use express. All its functions available via app
app.set('port', process.env.PORT || 3000);  //listen on the port

var server = app.listen(app.get('port'),function(){
	console.log('Server up: http://localhost:'+ app.get('port'));
});