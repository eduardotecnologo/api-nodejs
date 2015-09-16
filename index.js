var express = require('express');
var bodyParser = require('body-parser');
var expressJoi = require('express-joi');
var multer  = require('multer');
var methodOverride = require('express-method-override');


//var upload = multer({ dest: 'uploads/' });
var Joi = expressJoi.Joi; // The exposed Joi object used to create schemas and custom types
var app = express();

app.use(methodOverride());
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(express.static(__dirname + '/public'));


app.use('/admin',require('./app/routes/admin'));
app.use('/api/products',require('./app/routes/products'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
