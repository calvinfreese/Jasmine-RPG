var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("createPlayer");
  });

  app.get("/load-model", function(req, res) {
    res.render("loadModel");
  });


  app.get("/AllCharacters", function(req, res){
    db.character.findAll({}).then(function(dbChars) {
      
      res.render("AllCharacters", { characters: dbChars });
  
  });
});


app.get("/adventures", function(req, res) {
  res.render("adventures");
});

  // Load example page and pass in an example by id
  app.get("/characters/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbChar) {
      res.render("example", {
        character: dbChar
      });
    });
  });


app.get("/missions", function (req, res){
  db.character.findAll({}).then(function(dbChars) {
      db.journey.findAll({}).then(function(dbJourneys) {
        res.render("missions", { characters: dbChars, journeys: dbJourneys });
      });    
  });
});

app.get("/training", function(req, res){
 
  res.render("training");
});

app.get("/fight-pits", function(req, res) {
  db.enemy.findAll({}).then(function(dbEnemies){
    res.render("fightPits", {enemies: dbEnemies});
  });
  
});

// Render 404 page for any unmatched routes
app.get("*", function(req, res) {
  res.render("404");
});
};
// hello again