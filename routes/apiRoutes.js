var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/characters", function(req, res) {
    db.Character.findAll({}).then(function(dbChars) {
      res.json(dbChars);
    });
  });

  // Create a new example
  app.post("/api/characters", function(req, res) {
    db.Character.create(req.body).then(function(dbChar) {
      res.json(dbChar);
    });
  });

  // Delete an example by id
  app.delete("/api/characters/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
