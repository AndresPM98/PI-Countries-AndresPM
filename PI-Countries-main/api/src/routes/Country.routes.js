const { Router } = require("express");
const { getCountries, getCountryById, findCountry } = require("../Controllers/CountryController");
const router = Router();

 router.get("/", async (req, res) => { // Maneja una solicitud de tipo GET. La ruta está asociada con la raíz ("/").
  const { name } = req.query;
  let countries;
  try {
    if (name) countries = await findCountry(name); // Si la consulta en la solicitud incluye un parámetro "name",
    else countries = await getCountries();  // la función "findCountry" es invocada, sino se invoca "getCountries". 
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}); 

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  id = id.toUpperCase(); // No se si esta bien pero le damos la opcion de leer el id en "MAY" y "min".
  try {
    const country = await getCountryById(id); // Llama a la funcion para buscar por ID si este viene con la URL.
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
