const { Activity } = require("../db.js");

const getActivities = async () => {
    try {
      const activity = await Activity.findAll();
      return activity;
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  const deleteActivity = async (id) => {
    const activitiToDelete = await Activity.findByPk(id);
    await activitiToDelete.destroy();
    return activitiToDelete;
  };

  module.exports = {
    getActivities,
    deleteActivity,
  };
  