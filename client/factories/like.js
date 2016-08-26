qaModule.factory('AnswerFactory', function($http){
	var answers = [];
	var factory = {};

     // don't need a index or show action for likes
     // because likes will be retrieved as part of
     // the .populate and .exec function calls

     // to be fair we should send back like count

	factory.create = function(answer, callback) {
		$http.post('/answer', a).then(function(res) {
			callback(res);
		});
	};

	return factory;
});

// app.get('/', function(req,res){
// Answer.find({});
// .populate('likes');
// .exec(function(err, likes){
//		res.render('index', {likes: likes});
//	});
// });