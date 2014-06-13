// Require new parser.js file
var Parser = require('./parser');

// Load the filesystem (fs) module
var fs = require('fs');

// Read the contents of the file into memory
fs.readFile('example_log.txt', function(err,logData){

	// If an error occurred, throwing it will display the exception and end our app
	if (err) throw err;

	// logData is a Buffer, convert to string
	var text = logData.toString();

	// Create an instance of the Parser object
	var parser = new Parser();

	// Call the parse function
	console.log(parser.parse(text));
});