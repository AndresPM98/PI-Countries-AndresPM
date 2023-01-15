const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountry = async () => {
    const countries = await Country.findAll({ //falta terminar este controller

        through: {
          // y de la tabla intermedia.....
          attributes: [],
        },
    
    });
    return countries;
  };

  const getCountryById = async (id) => {
    const country = await Country.findByPk(id);
    return country;
  };

module.exports = {
    getCountry,
    getCountryById,
  };