var home = require('../controllers/home');
var login = require('../controllers/login');

module.exports.initialize = function(app, router, passport){

	router.get('/', isLoggedIn, home.index);
	router.get('/logout', login.logout);
	router.get('/login', login.getLoginPage);
	router.post('/signup', passport.authenticate('local-signup', login.signup));

	app.use('/', router);
}
function isLoggedIn(req,res,next){
	if(req.isAuthenticated())
		return next();
	res.redirect('/login')
}