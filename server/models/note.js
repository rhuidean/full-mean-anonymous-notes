var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
	note: {
		type: String,
		required: [true, "Note field cannot be blank."]
	}

},{timestamps: true})

//schema hasn't been registered for model "Note".
mongoose.model('Note', NoteSchema);