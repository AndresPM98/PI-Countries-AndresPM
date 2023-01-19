const { Country } = require("../db.js");
const { Op } = require ("sequelize")
const { getInfo } = require ("../Database")
const { includeObject } = require ("./IncludeController")

const getCountries = async () => {
  try {
    await getInfo();
    const country = await Country.findAll(includeObject);
    return country;
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

 const findCountry = async (name) => {
  console.log("findCountry");
  const results = await Country.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
    ...includeObject,
  });
  if(results.length === 0) {
      return "Country not found";
  }
  return results;
}; 

const getCountryById = async (id) => {
  const country = await Country.findByPk(id, includeObject);
  return country;
};

  module.exports = {
    getCountries,
    findCountry,
    getCountryById,
  };
  
  