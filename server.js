// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var methodOverride = require('method-override');
var routes = require('./controllers/burgers_controllers.js');

var app = express();

var port = process.env.PORT || 3000;

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/', routes)

app.use(express.static(process.cwd() + '/public'));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

// Initialize
app.listen(PORT, function() {
    console.log('Server Running. Listening in on ' + port);
});