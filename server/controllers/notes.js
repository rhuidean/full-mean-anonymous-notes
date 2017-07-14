//Cannot find module './server/config/mongoose'->duplicate server.js content

var mongoose = require("mongoose");

// import relevant models
var Note = mongoose.model('Note');

module.exports = {
	
	index: function(req,res){
		Note.find({}).sort('-createdAt').exec(function(err,notes){
			if(err){
				return res.json(err);
			}
			return res.json(notes);
		})
	},

	create: function(req,res){
		Note.create(req.body, function(err,note){
			if(err){
				return res.json(err);
			}
			else {
				return res.json(note);
			}
		})
	},
}

//TypeError: res.json is not a function req<->res
