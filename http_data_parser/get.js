// Include http module
var http = require('http'),
// And url module which is very helpful in parsing request parameters
	url = require('url'),
	fs = require('fs');

// Create the server
http.createServer(function(request, response){
	// Parse the rquest for arguments and store them in _get variable.
	// This function parses the url from request and returns object representation
	if (request.url != '/')
	{
		fs.readFile('test.txt', 'utf-8', function(error, data){
			var _get = url.parse(request.url, true).query;
			response.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			// Increment the number obtained from file
			data = parseInt(data) + 1;
			// Write incremented number to file
			fs.writeFile('test.txt', data)
			// Send data and end response
			response.end('This page was refreshed ' + data + ' times. '+'Here is your data: ' + _get['data']);
		});

	} else {
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		response.end('No data');
	}
	// + _get['data']);
// Listen on the 8080 port
}).listen(8080);