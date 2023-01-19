const { Router } = require("express");
const { getCountries, getCountryById, findCountry } = require("../Controllers/CountryController");
const router = Router();

 router.get("/", async (req, res) => {
  const { name } = req.query;
  let countries;
  try {
    if (name) countries = await findCountry(name);
    else countries = await getCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}); 

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  id = id.toUpperCase();
  try {
    const country = await getCountryById(id);
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
