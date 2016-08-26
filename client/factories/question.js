qaModule.factory('QuestionFactory', function($http){
	var questions = [];
	var factory = {};

	// building out the create a question

	factory.create = function(answer, callback) {
		$http.post('/question/create', a).then(function(res) {
			callback(res);
		});
	};

	return factory;
});