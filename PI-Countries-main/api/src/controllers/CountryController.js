const { Country } = require("../db.js");
const { Op } = require ("sequelize")
const { getInfo } = require ("../Database")
const { includeActivity } = require ("./IncludeController")

const getCountries = async () => {
  try {
    await getInfo();
    const country = await Country.findAll(includeActivity);
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
    ...includeActivity,
  });
  if(results.length === 0) {
      throw Error ("Country not found");
  }
  return results;
}; 

const getCountryById = async (id) => {
  const country = await Country.findByPk(id, includeActivity);
  return country;
};

  module.exports = {
    getCountries,
    findCountry,
    getCountryById,
  };
  
  