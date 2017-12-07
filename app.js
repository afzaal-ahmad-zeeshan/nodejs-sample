const express = require("express");
let app = new express();

app.get("/", function(req, res) {
    res.send("Hello, from Node Sample.");
});

app.get("/about", function(req, res) {
    res.send("About this web app.");
});

app.get("/contact", function(req, res) {
    res.send("@afzaalvirgoboy");
});

app.get("*", function(req, res) {
    res.send("Bud, you're lost.");
});

app.all("*", function(req, res) {
    res.send("What're you trying to do?");
});

let port = 12345;
app.listen(port, function() {
    console.log("Server started listening at localhost:" + port);
});