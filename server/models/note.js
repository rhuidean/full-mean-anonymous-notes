var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
	note: {
		type: String,
		required: [true, "Note field cannot be blank."]
	}

},{timestamps: true})