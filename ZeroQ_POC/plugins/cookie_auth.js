var CookieAuth = require('hapi-auth-cookie');

exports.register = function(server,options,next){
	next();
	};
exports.register.attributes = {
	name : 'cookie-auth'
	};
