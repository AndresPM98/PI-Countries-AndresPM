const { Activity } = require("../db.js");
 const includeObject = {
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  };

  module.exports = {
   includeObject,
  };