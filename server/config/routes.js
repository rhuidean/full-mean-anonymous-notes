var Notes = require('../controllers/notes');

module.exports = function(app){
	app.post('/',Notes.create);
	app.get('/',Notes.index);
}

