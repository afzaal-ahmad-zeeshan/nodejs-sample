const express = require("express");
let app = new express();
let path = require("path");

app.use(function(req, res, next) {
    res.locals.platform = process.env.PLATFORM || "";
    res.locals.secretMessage = process.env.SECRET_MESSAGE || "";
    next();
});

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
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

let port = process.env.PORT || 1234;
app.listen(port, function() {
    console.log("Server started listening at http://localhost:" + port);
});