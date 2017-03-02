var express = require("express");
// Inv = require("./controllers/controllers.inventory"),
// List = require("./controllers/controllers.newListings");

var app = express();

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile("index.html", {
            root: './public/html'
        });
    });



}
