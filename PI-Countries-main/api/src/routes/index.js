const { Router } = require('express');
const {
    getCountry,
    getCountryById
  } = require("../controllers/CountriesControllers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res) => { //Ver correcciones de ruta y controllers
    const { name } = req.query;
    let users;
    try {
      if (name) users = await findUsers(name);
      else users = await getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const country = await getCountryById(id);
        res.status(200).json(country);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

module.exports = router;
