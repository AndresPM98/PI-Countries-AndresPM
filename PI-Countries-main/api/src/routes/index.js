const { Router } = require('express');
const router = Router();
// Importar todos los routers;
const countryRouter = require('./Country.routes');
const activityRouter = require('./Activity.routes.js');

// Configurar los routers
router.use('/countries', countryRouter);
router.use('/', activityRouter);

module.exports = router;
