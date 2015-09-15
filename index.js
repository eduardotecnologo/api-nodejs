var express = require('express');
var bodyParser = require('body-parser');
var expressJoi = require('express-joi');
var multer  = require('multer')

//var upload = multer({ dest: 'uploads/' });
var Joi = expressJoi.Joi; // The exposed Joi object used to create schemas and custom types
var app = express();

app.use(multer());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/api/products',require('./app/routes/products'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
