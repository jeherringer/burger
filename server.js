var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ type: 'application/json' }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.static('./public'));
 
require("./controllers/burger_controller.js")(app);


app.listen(PORT, () => {
    console.log(`Express app listening on` + PORT);
});