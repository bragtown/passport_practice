var LocalStrategy = require('passport-local');
var User = require('../app/models/user');
module.exports = function(passport){
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(
    	'local-signup',
		new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true //allows us to pass this request into the callback function
		}),
		function(req, email, password, done){

			process.nextTick(function(){
				User.findOne({'local.email':email}, function(err, user){
					if(err)
						return done(err);
					if(user){
						return done(null, false, req.flash('signupMessage', 'Email in use'))
					}
					else{
						var newUser = new User();
						newUser.local.email = email;
						newUser.local.password = newUser.generateHash(password);
						newUser.save(function(err){
							if(err)
								throw err;
							return done(null, newUser);
						});
					}
				});
			});
		}

	);

	

}