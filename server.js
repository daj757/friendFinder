const express = require("express");
// let exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


let run2 = require("./app/routing/apiRoutes");
let run = require("./app/routing/htmlRoutes");

run2(app)
run(app)


app.listen(port, function() {
    console.log("App listening on PORT " + port);
});