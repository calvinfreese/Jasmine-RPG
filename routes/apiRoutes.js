var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/characters", function(req, res) {
    db.character.findAll({}).then(function(dbChars) {
      
      res.json(dbChars);
    });
  });

  // Create a new example
  app.post("/api/characters", function(req, res) {
    db.character.create({
      player_name: req.body.player_name,
      player_age:req.body.player_age,
      player_race: req.body.player_race,
      player_class: req.body.player_class
    }).then(function(dbChar) {
      
      res.json(dbChar);
    });
  });

  // Delete an example by id
  app.delete("/api/characters/:id", function(req, res) {
    db.character.destroy({ where: { id: req.params.id } }).then(function(dbChar) {
      res.json(dbChar);
    });
  });
};
