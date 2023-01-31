const { Router } = require('express');
const { Country, Activity } = require('../db.js');
const { getActivities } = require('../controllers/ActivityController');
const router = Router();

router.post('/activity', async(req, res) => {
  const{name, difficulty, duration, season, countryId} = req.body;
  const createActivity = await Activity.create({  //La función utiliza el modelo Activity 
    name,                                //para crear un nuevo registro de actividad en la 
    difficulty,                          //base de datos con los detalles proporcionados.
    duration,
    season,
    countryId
  });

  const countries = await Country.findAll({ // la función encuentra el país correspondiente 
    where: {id: countryId}                  // a través del ID del país.
  })
  
  createActivity.addCountries(countries)
  return res.status(200).send(createActivity)
});

router.get('/activities', async(req, res) => {
  const activities = await getActivities();
  return res.status(200).send(activities)
});

module.exports = router;