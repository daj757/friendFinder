const express = require("express");
// let exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");








app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});