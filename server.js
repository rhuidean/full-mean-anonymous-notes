var express = require('express');
var bp = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

app.use(bp.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(4200,function(){
	console.log('listening on port 4200');
})


//loading note.js...
//(node:10356) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
//listening on port 4300