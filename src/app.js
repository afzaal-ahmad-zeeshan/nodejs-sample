const express = require("express");
let app = new express();
let path = require("path");

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/src/index.html"));
});

app.get("/about", function(req, res) {
    res.render("about.pug", { greeting: "everyone!" });
});

app.get("/about/:name", function(req, res) {
    if (req.params.name) {
        res.render("about.pug", { greeting: req.params.name});
    } else {
        res.render("about.pug", { greeting: "everyone!" });
    }
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

let port = 1234;
app.listen(port, function() {
    console.log("Server started listening at http://localhost:" + port);
});