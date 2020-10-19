var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // console.log(req.user);
    // if (req.user) {
    //   res.redirect("/signedIn");
    // }
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/characters/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbChar) {
      res.render("example", {
        character: dbChar
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
