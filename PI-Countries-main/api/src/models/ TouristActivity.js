const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Activity', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name:{
      type: DataTypes.STRING,
    },
    difficulty:{
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
    },
    duration:{
      type: DataTypes.INTEGER,
    },
    season:{
      type: DataTypes.ENUM(['Summer', 'Winter', 'Autumn', 'Spring']),
    },
  },
  { timestamps: false }
  );
};
/* [ ] Actividad Turística con las siguientes propiedades:
ID
Nombre
Dificultad (Entre 1 y 5)
Duración
Temporada (Verano, Otoño, Invierno o Primavera) */
