const { Country, Activity } = require("../db.js");
const {getInfo} = require ("../Database")

const getDbInfo = async () => {
    try {
      await getInfo();
      const aux = await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: {
            attributes: [],
          },
        },
      });
      return aux;
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  module.exports = {
    getDbInfo,
  };
  
  