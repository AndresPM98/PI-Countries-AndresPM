const { Country, Activity } = require("../db.js");
const {getInfo} = require ("../Database")

const getCountries = async () => {
    try {
      await getInfo();
      const country = await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: {
            attributes: [],
          },
        },
      });
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
    });
    return results;
  };

  const getCountryById = async (id) => {
    const country = await Country.findByPk(id, {
      include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
    return country;
  };
  

  module.exports = {
    getCountries,
    findCountry,
    getCountryById,
  };
  
  