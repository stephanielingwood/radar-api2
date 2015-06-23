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

routes(app);

var PORT = process.env.API_PORT || '3001';

// listen
app.listen(PORT, function() {
  console.log("Application running on port:", PORT);
});
