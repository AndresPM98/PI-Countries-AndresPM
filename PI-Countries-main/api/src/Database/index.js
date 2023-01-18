const { Country, Activity } = require("../db.js");
const axios = require("axios");

const getInfo = async () => {
  try {
    const url = await axios.get("https://restcountries.com/v3/all");
    const apiInfo = url.data.map((country) => {
      let capital = country.capital;
      if(!capital){
        capital = "No tiene capital"
      }else if(Array.isArray(capital) && capital.length === 0) {
        capital = "No tiene capital"
      }
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags[0],
        continent: country.region,
        capital: capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      };
    });

    apiInfo.map((element) => {
      Country.findOrCreate({
        where: {
          name: element.name,
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
    return apiInfo;
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getInfo,
};

