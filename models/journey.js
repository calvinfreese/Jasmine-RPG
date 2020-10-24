module.exports = function(sequelize, DataTypes) {
  var Journey = sequelize.define("journey", {
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER,
  });
  return Journey;
};