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
      name: req.body.name,
      age:req.body.age,
      race: req.body.race,
      class: req.body.class
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
