const { Activity } = require("../db.js");

const getActivities = async () => {
    try {
      const get = await Activity.findAll();
      return get;
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  module.exports = {
    getActivities,
  };
  