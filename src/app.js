'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');
var app = express();

require('./database');
require('./seed');

app.use('/', express.static('public'));

//There are other body parsing methods as well. 
app.use(parser.json());

app.use('/api', router);

var port = 3000;
app.listen(port, function() {
	console.log("The service is running on port " + port);
});
