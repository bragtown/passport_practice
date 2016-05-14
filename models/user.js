var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	local:{
		email:String,
		password:String
	}
});
//generates a hash
UserSchema.methods.generateHash = function(password){
	return bcrypt.compareSync(password,bcrypt.genSaltSync(8), null)
}
// checks if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
module.exports = mongoose.model('User', UserSchema);