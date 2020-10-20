var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("createPlayer");
  });


  app.get("/AllCharacters", function(req, res){
    db.character.findAll({}).then(function(dbChars) {
      
      res.render("AllCharacters", { characters: dbChars });
  
  });
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
// hello again