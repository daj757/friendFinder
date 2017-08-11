const path = require("path");
const express = require("express");
const app = express();
let main = () => {
	console.log("here")
	app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
}

module.exports = main;