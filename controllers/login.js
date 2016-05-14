module.exports = {
	getLoginPage: function(req,res){
		res.send('this is the login page')
	},
	logout: function(req,res){
		req.logout();
		res.redirect('/signup');
	},
	signup: function(req,res){
		res.send('signup');
	}

}