const { Activity } = require("../db.js");

 const includeActivity = {
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  };

  module.exports = {
   includeActivity,
  };