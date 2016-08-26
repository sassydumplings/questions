qaModule.controller('qaController', function($scope, QuestionFactory){
	console.log('QuestionController is loaded');

	// this get runs everytime controller is loaded
	// intializes the list of questions

	QuestionFactory.get(function(data){
		$scope.questions = data;
	});

	scope.create = function(){
		QuestionFactory.create($scope.newQuestion, function(data){
			QuestionFactory.get(function(data){
				$scope.questions = data;
				$scope.newQuestion = {};
			});
		});
	};


});