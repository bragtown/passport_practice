path = require('path')
module.exports = {
	getLoginPage: function(req,res){
		res.sendFile(path.join(__dirname, '/../views/login.html'));
	},
	logout: function(req,res){
		req.logout();
		res.redirect('/login');
	},
	signup: function(passport,req,res){
		console.log("in signup");
		passport.authenticate(
		'local-signup', 
		{
			successRedirect : '/',
			failureRedirect : '/login',
			failureFlash : true
		});
	}

}