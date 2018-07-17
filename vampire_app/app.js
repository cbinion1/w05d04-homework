// 1. Require your node modules
const mongoose = require("mongoose");
// 2. Require your model (and possibly your extra data source);
const Vampires = require('./models/vampire');
const vampireCollection = require('./populateVampires');
// 3. Connect your database and collection name
const app = mongoose.connection;
mongoose.connect("mongodb://localhost:27017/vampires");
// 4. Open your mongoose connection
app.on("error", (err) => {
	console.log(err, "this is the error message")
});

app.on("connected", () => {
	console.log("mongoose is connected to mongodb")
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampires.collection.insertMany(vampireCollection,(err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//   });
// ### Add some new vampire data
// Vampires.create( {
// 				name: "Earl" ,
// 				hair_color: "",
// 				eye_color: "Blue",
// 				dob: "07/10/1900",
// 				location: "Anywheresville, CA",
// 				gender: "M",
// 				victims: 567
// 				}, (err, article) => {
// 					if(err){
// 						console.log(err)
// 					} else {
// 						console.log(article);
// 					}
// 				});

// Vampires.create( {
// 				name: "Fred" ,
// 				hair_color: "Orange",
// 				eye_color: "Pink",
// 				dob: "12/29/1770",
// 				location: "Schenectady, PA",
// 				gender: "M",
// 				victims: 567
// 				}, {
// 				name: "Annie" ,
// 				hair_color: "Yellow",
// 				eye_color: "Green",
// 				dob: "11/22/1274",
// 				location: "Columbus, OH",
// 				gender: "F",
// 				victims: 555
// 				},{
// 				name: "Gladys" ,
// 				hair_color: "Bald",
// 				eye_color: "Empty Sockets",
// 				dob: "12/29/1770",
// 				location: "Sao Palo, Brazil",
// 				gender: "Female",
// 				victims: 5629470864
// 				},(err, vampire) => {
// 					if(err){
// 						console.log(err)
// 					} else {
// 						console.log(article);
// 					}
// 				});

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampires.find({gender: "f"}, (err, articles) => {
//   console.log(response);
// });

// Vampires.find({victims: {$gt:500}}, (err, response) => {
// 	console.log(response);
// });

// Vampires.find({victims: {$lte:150}}, (err, response) => {
// 	console.log(response);
// });

// Vampires.find({victims: {$ne:210234}}, (err, response) => {
// 	console.log(response);
// });

// Vampires.find({victims: {$gt:150, $lt:500}}, (err, response) => {
// 	console.log(response);
// });


/////////////////////////////////////////////////
// ### Select by exists or does not exist

// Vampires.find({title: {$exists:true}}, (err, response) => {
// 	console.log(response);
// });

// Vampires.find({victims: {$exists:true}}, (err, response) => {
// 	console.log(response);
// });
/////////////////////////////////////////////////
// ### Select with OR
// Vampires.find({title: {$exists:true}, victims: {$exists:false}}, (err, response) => {
// 	console.log(response);
// });

// Vampires.find({victims: {$exists:true}, victims: {$gt:1000}}, (err, response) => {
// 	console.log(response);
// });

// Vampires.find({$or: [{location: "New York, New York, US"}, {location: "New Orleans, Louisiana, US"}]}, (err, response) => {
// 	console.log(response);
// });

// Vampires.find({loves:{$in:["brooding", "being tragic"]}}, (err, response) => {
//     console.log(response);
// })

// Vampires.find({$or:[{loves:{$in:["marshmallows"]}}, {victims: {$gt:1000}}]}, (err, response) => {
//     console.log(response);
//     app.close();
// })

// Vampires.find({$or: [{hair_color: "red"}, {eye_color: "green"}]}, (err, response) => {
// 	console.log(response);
// });
/////////////////////////////////////////////////
//### Select objects that match one of several values
// Vampires.find({loves:{$in:["frilly shirtsleeves", "frilly collars"]}}, (err, response) => {
//     console.log(response);
//     app.close();
// })


// Vampires.find({loves:{$in:["brooding"]}}, (err, response) => {
//     console.log(response);
//     app.close();
// })

// Vampires.find({loves:{$in:["appearing innocent", "trickery", "lurking in rotting mansions", "R&B music"]}}, (err, response) => {
//     console.log(response);
//     app.close();
// })

// Vampires.find({loves:{$in:["fancy cloaks"], $nin: ["top hats", "virgin blood"]}}, (err, response) => {
//     console.log(response);
//     app.close();
// })
/////////////////////////////////////////////////
//### Negative Selection

// Vampires.find({loves: { $in: ["ribbons"]}, eye_color: {$not: {$eq: "brown"}}}, (err, response) => {
//     console.log(response);
//     app.close();
// });

// Vampires.find({location: {$nin: "Rome"}}, (err, response) => {
// 	console.log(response);
// 	app.close();
// });

// Vampires.find({loves:{$nin:["fancycloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]}}, (err, response) => {
// 	console.log(response);
// 	console.log(err);
// 	app.close();
// });

// Vampires.find({victims: {$lt:200}}, (err, response) => {
// 	console.log(response);
// 	app.close();
// });


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

// Vampires.findOneAndUpdate(
// 	{ name: "Claudia" },
//   	{ $set: { name: "Eve", portrayed_by: "Tilda Swinton"} }, 
//   	{ new : true }, 
//   	(err, response) => {
//     console.log(response);
//     app.close();
// });

// Vampires.findOneAndUpdate(
// 	{ gender: "m" },
//   	{ $set: { name: "Guy Man", is_actually: "Were Lizard"} }, 
//   	{ new : true }, 
//   	(err, response) => {
//     console.log(response);
//     app.close();
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

// Vampires.findOneAndUpdate(
// 	{ name: "Guy Man" },
//   	{ $set: { gender: "f"} }, 
//   	{ new : true }, 
//   	(err, response) => {
//     console.log(response);
//     app.close();
// });

// Vampires.findOneAndUpdate(
// 	{ name: "Eve" },
//   	{ $set: { gender: "m"} }, 
//   	{ new : true }, 
//   	(err, response) => {
//     console.log(response);
//     app.close();
// });

// Vampires.findOneAndUpdate(
// 	{ name: "Guy Man" },
//   	{ $set: { hates: ["clothes", "jobs"]} }, 
//   	{ new : true }, 
//   	(err, response) => {
//     console.log(response);
//     app.close();
// });

// Vampires.findOneAndUpdate(
// 	{ name: "Guy Man" },
//   	{ $push: { hates: ["alarm clocks", "jackalopes"]} }, 
//   	{ new : true }, 
//   	(err, response) => {
//     console.log(response);
//     app.close();
// });

// Vampires.findOneAndUpdate(
// 	{ name: "Eve" },
//   	{ $rename: { "name": "moniker"} }, 
//   	{ new : true }, 
//   	(err, response) => {
//     console.log(response);
//     app.close();
// });

// Vampires.updateMany(
// 	{ gender: "f" },
//   	{ $set: { gender: "fems"} }, 
//   	{ new : true }, 
//   	(err, response) => {
//     console.log(response);
//     app.close();
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

// Vampires.findOneAndRemove(
// 	{ eye_color: "brown"}, 
//   	(err, response) => {
//     console.log(response);
//     app.close();
// });

// Vampires.deleteMany(
// 	{ eye_color: 'blue'},	
// 	(err, response) => {
// 	console.log(response);
// 	app.close();
// });



/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
