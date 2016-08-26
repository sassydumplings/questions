qaModule.factory('AnswerFactory', function($http){
	var answers = [];
	var factory = {};

	factory.get = function(callback) {
		$http.get('/answers/:id').then(function(res) {
			// :id refers to the question id
			// gettting answers for a specific question
			// returning answer count
			callback(answers);
		});
	};

	factory.create = function(answer, callback) {
		$http.post('/answer', a).then(function(res) {
			callback(res);
		});
	};

	return factory;
});