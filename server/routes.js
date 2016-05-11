var home = require('../controllers/home');
var login = require('../controllers/login');

module.exports.initialize = function(app, router){

	router.get('/', home.index);
	router.get('/login', login.getLoginPage);
	app.use('/', router);
}