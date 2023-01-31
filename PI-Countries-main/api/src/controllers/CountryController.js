const { Country } = require("../db.js");
const { Op } = require ("sequelize")
const { getInfo } = require ("../Database")
const { includeActivity } = require ("./IncludeController")

const getCountries = async () => {     // Funcion asincrona que utiliza la funcion creada en la carpeta ...     
  try {                                // "Database" para traer la informacion filtrada de todos los paises.
    await getInfo();
    const country = await Country.findAll(includeActivity); //utiliza el método "findAll" en el modelo Country 
    return country;                                         //para obtener todos los registros de países en 
  } catch (error) {                                   //la base de datos y se almacenan en la variable "country".
    return res.status(400).json({ message: error.message });
  }
}; 


 const findCountry = async (name) => {    // Funcion para buscar paises por nombre.
  console.log("findCountry");               // Recibe la prpiedad por parametro.
  const results = await Country.findAll({   // Utiliza el metodo "findAll" en el modelo "Country" 
    where: {                                // y el operador "iLike" para ver si existe una propiedad
      name: { [Op.iLike]: `%${name}%` },    // que coincida con el name pasado por params.
    },
    ...includeActivity,
  });
  if(results.length === 0) {
      throw Error ("Country not found");
  }
  return results;
}; 

const getCountryById = async (id) => {  // Funcion que busca paises por ID utilizando el metodo "findByPk".
  const country = await Country.findByPk(id, includeActivity);
  return country;
};

  module.exports = {
    getCountries,
    findCountry,
    getCountryById,
  };
  
  