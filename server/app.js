
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.post('/whistle-point/', function(req, res) {
  console.log("Somebody pressed the button");
  res.send('User propertly reported');
});


app.listen(8000, function () {
  console.log('Reporting backend listening in port 8000');
});
