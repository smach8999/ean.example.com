var config = require('./config.dev');
var mongoose = require('mongoose');

//Test the file
// console.log(config);

//Connect to MongoDB
mongoose.connect(config.mongodb, { useNewUrlParser: true });