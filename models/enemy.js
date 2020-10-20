module.exports = function(sequelize, DataTypes) {
    var Enemy = sequelize.define("enemy", {
      name: DataTypes.STRING,
      strength: DataTypes.INTEGER,
      health: DataTypes.INTEGER 
    });
    return Enemy;
  };