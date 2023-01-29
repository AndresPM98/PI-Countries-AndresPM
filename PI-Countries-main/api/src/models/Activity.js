const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
      type: DataTypes.UUID,   // Identificador único de tipo Universally Unique Identifier. 
      primaryKey: true,
      unique: true,
      defaultValue: UUIDV4    // Especifica un valor por defecto para el atributo formato V4.
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    difficulty: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,               // Especificamos el rango de dificultad.
        max: 5,
      }
    },

    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    season: {
      type: DataTypes.ENUM({
        values: ['summer', 'autumn', 'winter', 'spring'],   // Especificamos los valores del campo.
      })
    }, 
    
  },{timestamps: false});
};
