
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');
var path = require('path');
var errorHandler = require('errorhandler');
var express = require('express');
var cookieparser = require('cookieparser');
var passport = require('passport');
var confPassport = require('./config/passport');

module.exports = function(app){
	app.use(logger('dev'));
	app.use(bodyParser.json()); 
	app.use(bodyParser.urlencoded({extended:true}));

	//stuff required for passport
	app.use(session({
		secret: 'somefunsecrettotypeinhere'
	}));
	confPassport(passport);
	app.use(passport.initialize());
	app.use(passport.session());

	routes.initialize(app, new express.Router(), passport);
	if('development' === app.get('env')){
		app.use(errorHandler());
	}
	return app;

};