const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vampireSchema = new Schema({
	name: {type: String, required: true},
	hair_color: {type: String, default: "Blonde"},
	eye_color: String,
	dob: Date,
	loves: [String],
	location: String,
	gender: String,
	victims: {type: Number, min: 0},
	portrayed_by: String,
	is_actually: String,
	hates: [String]
});



const Vampire = mongoose.model("Vampire", vampireSchema);



module.exports = Vampire;

