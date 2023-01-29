const { Activity } = require("../db.js");

 const includeActivity = {  // Como todas las busqueda por paises debian incluir las actividades, 
    include: {              // modularizamos la info en esta funcion para despues simplemente llamarla
      model: Activity,      // cuando sea necesario en la carpeta "CountryController".
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  };

  module.exports = {
   includeActivity,
  };