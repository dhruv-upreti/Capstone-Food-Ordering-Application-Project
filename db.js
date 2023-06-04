const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://dhruvdupreti:temp@mern-burger.qjg43tl.mongodb.net/"

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;


db.on("connected", ()=> {
  console.log("Mongo DB connection Succesfull");
});

db.on("connection", ()=> {
    console.log("Mongo DB connection failed");
  });


module.exports = mongoose;