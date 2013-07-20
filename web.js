var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

//app.get('/', function(request, response) {
  //response.send('Hello World 2!');
//});

fs.readFile('./index.html', 'utf8', function(err, html) {
if (err) throw err; 
});



var port = process.env.PORT || 5000;
fs.listen(port, function() {
  console.log("Listening on " + port);
});
