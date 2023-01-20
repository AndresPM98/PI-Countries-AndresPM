const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      validate: {
        max: 5,
        min: 1
      }
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM({
        values: ['Summer', 'Autum', 'Winter', 'Spring'],
      })
    }, 
  },{timestamps: false});
};