// Include http module and mysql module
var http = require('http'),
	mysql = require('mysql');

// Create the connection
var connection = mysql.createConnection({
	user: 'root',
	password: '',
	database: 'db_name'
});

// Create the http server
http.createServer({

	// Query the database
	connection.query('SELECT * FROM your_table;', function(error, row, fields){
		response.writeHead(200, {
			'Content-Type': 'x-application/json'
		});
		// Send data as JSON string
		// Rows variable holds the result of the query
		response.end(JSON.stringify(rows));
	});
// Listen on the 8080 port
}).listen(8080);