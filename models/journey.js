module.exports = function(sequelize, DataTypes) {
  var Journey = sequelize.define("journey", {
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER,
    item_type: DataTypes.STRING,
    item_name: DataTypes.STRING
  });
  return Journey;
};