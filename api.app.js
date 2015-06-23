var cors = require('cors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/routes');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Accept,Content-Type,Authorization,Cookie');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

routes(app);

var PORT = process.env.API_PORT || '3001';

// listen
app.listen(PORT, function() {
  console.log("Application running on port:", PORT);
});
