// This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)

var questions = require('./../controllers/questions.js');

module.exports = function(app){
	app.get('/', function(req,res){
		console.log('in root route');
	});
	app.get('/questions', function(req,res){

		console.log("in the get questions route");
		// calls backend controller method
		// see above require .. it will call the friends.js controller

		// questions.index(req,res);
	});

	app.post('/question', function(req,res){
		console.log("in post request: " + req.body.name);
		questions.create(req,res);
	});

};