var home = require('../controllers/home');
var login = require('../controllers/login');

module.exports.initialize = function(app, router, passport){

	router.get('/', isLoggedIn, home.index);
	router.get('/logout', login.logout);
	router.get('/login', login.getLoginPage);
	router.post(
		'/signup',
		passport.authenticate('local-signup', {failureRedirect: '/login'}),
		function(req,res){
			console.log('signed up!');
			res.redirect('/');
		}		

	);
	router.post(
		'/login',
		passport.authenticate('local-login', {failureRedirect: '/login', failureFlash: true}),
		function(req,res){
			console.log('logged in');
			res.redirect('/');
		}
	);

	app.get('/auth/lds', passport.authenticate('lds.io'));
	app.get(
		'/auth/lds/callback',
		passport.authenticate('lds.io', {failureRedirect:'/login'}),
		function(req,res){
			console.log('lds logged in');
			res.redirect('/')
		}
	);

	app.use('/', router);
}
function isLoggedIn(req,res,next){
	if(req.isAuthenticated())
		return next();
	console.log('in isLoggedIn');
	res.redirect('/login');
}