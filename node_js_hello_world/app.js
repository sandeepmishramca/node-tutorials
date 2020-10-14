var http = require('http');
http.createServer(function(request, response) {
// Write a response which we want to display on browser
response.write('Hello CodingwithAmit');
// End the response
response.end();
// bind the server on 3030 port
}).listen(3030);

 console.log("App listening at http://localhost:3030");