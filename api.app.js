var debug = require('debug')('myapp:server');
var http = require('http');
var cors = require('cors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/routes');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.WWW_URL)
  var WWW_URL = process.env.WWW_URL;
else if (process.env.WWW_PORT)
  var WWW_URL = 'http://localhost:' + process.env.WWW_PORT;
else
  var WWW_URL = 'http://localhost:3000';

app.use(cors());

routes(app);

var PORT = process.env.API_PORT || '3001';

// listen
app.listen(PORT, function() {
  console.log("Application running on port:", PORT);
});
