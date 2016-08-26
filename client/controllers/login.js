qaModule.controller('loginController', function($scope, UserFactory){
	console.log('loginController is loaded');

	// loginController talks to the UserFactory for
	// validation for the user login form

	scope.login = function(){
		console.log("in user login on login controller");

		UserFactory.login($scope);
	};

});