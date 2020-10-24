module.exports = function(sequelize, DataTypes) {
    var Enemy = sequelize.define("enemy", {
      name: DataTypes.STRING,
      race: DataTypes.STRING,
      strength: DataTypes.INTEGER,
      health: DataTypes.INTEGER 
    });
    return Enemy;
  };