module.exports = function(sequelize, DataTypes) {
  var Characters = sequelize.define("characters", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    strength: {
      type: DataTypes.INTEGER,
      defaultValue: 25
    },
    magic: {
      type: DataTypes.INTEGER,
      defaultValue: 25
    },
    health: {
      type: DataTypes.INTEGER,
      defaultValue: 50
    }
  });
  return Characters;
};


// class Character extends Model {

// }

// class Race extends Model {

// }

// Character.init({
//   player_name: DataTypes.STRING,
//   player_age: DataTypes.INTEGER,
//   player_race: DataTypes.STRING,
//   player_class: DataTypes.STRING,
//   player_strength: DataTypes.INTEGER,
//   player_magic: DataTypes.INTEGER,
//   player_health: DataTypes.INTEGER
// },
// Character.associate())
// Race.init({})