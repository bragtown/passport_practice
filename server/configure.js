
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');
var path = require('path');
var errorHandler = require('errorhandler');

module.exports = function(app){
	app.use(logger('dev'));
	app.use(bodyParser.json()); 
	app.use(bodyParser.urlencoded({extended:true}));
	routes.initialize(app, new express.Router());
	if('development' === app.get('env')){
		app.use(errorHandler());
	}
	return app;

};