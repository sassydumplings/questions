// skeleton factory for the user login

qaModule.factory('UserFactory', function($http){
	var factory = {};

	factory.login = function(callback){
		// TODO:
		//		1) add username to session
		//		2) redirect to questions dashboard
	};

	factory.logout = function(callback) {
		// TODO:
		//		1) remove username from session
		//		2) redirect to login page
	};

	return factory;
});
