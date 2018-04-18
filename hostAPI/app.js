var express = require('express');
var app = express();

app.get('/api', function(req, res){
	
	res.sendFile( __dirname + "/" + "index.html" );
});

var server = app.listen(3000, function(){
  console.log('Magic is happening on port 3000')
});
