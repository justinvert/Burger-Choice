var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}))

var methodOverride = require('method-override')
app.use(methodOverride('_method'))

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller.js");
app.use('/', router);

app.listen(PORT, function() {
  console.log("Connected at http://localhost:" + PORT);
});