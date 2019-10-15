var friendData = require("../data/friends");

var express = require("express");
var app = express();
app.use(express.static("public"));

module.exports = function (app) {

app.get("/api/friends", function (req, res) {
    res.json(friendData);
});


app.post("/api/friends", function(req, res) {
      friendData.push(req.body);
      res.json(true);
    })
};