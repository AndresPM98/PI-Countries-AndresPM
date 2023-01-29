const { Country, Activity } = require("../db.js"); //Revisar Activity??
const axios = require("axios");

const getInfo = async () => {   // Funcion que hace el llamado a la API ...
  try {                         // Utilizamos el "Try/Catch" para manejar un posible error ...
    const url = await axios.get("https://restcountries.com/v3/all"); // Hacemos el llamado a ala API ...
    const apiInfo = url.data.map((country) => {                 // Mapeamos la info que nos devuelve ...
      let capital = country.capital;
      if(!capital){                                             // Chequeamos si nos trae la propiedad "Capital"
        capital = "No tiene capital"
      }else if(Array.isArray(capital) && capital.length === 0) {
        capital = "No tiene capital"
      }
      return {                               // Retornamos las propiedades que nos interesan para el PI ...
        id: country.cca3,
        name: country.name.common,
        flag: country.flags[0],
        continent: country.region,
        capital: capital[0],
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      };
    });

    apiInfo.map((element) => {      // Mapeamos la info y se usa el método "findOrCreate" en el modelo...
      Country.findOrCreate({        // "Country" para buscar un registro con los valores... 
        where: {                    // especificados en "where" y si no se encuentra, ...
          name: element.name,       // crea uno con los valores especificados en "defaults".
          id: element.id,
        },
        defaults: {
          continent: element.continent,
          flag: element.flag,
          capital: element.capital,
          subregion: element.subregion,
          area: element.area,
          population: element.population,
        },
      }).catch((error) => {
        console.log(error);
      });
    });
    return apiInfo;              // Retornamos la variable que guarda la info que nos interesa
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getInfo,
};

