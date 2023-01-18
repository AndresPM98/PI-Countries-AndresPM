const { Router } = require("express");
const { getCountries, getCountryById, findCountry } = require("../controllers/CountryController");
const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.body;
  let countries;
  try {
    if (name) countries = await findCountry(name);
    else countries = await getCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* router.get("/", async (req, res) => {
  const { name } = req.query;
  let totalCountries = await getCountries();

  if (name) {
    let countryName = await totalCountries.filter((element) =>
      element.name.toLowerCase().includes(name.toLowerCase())
    );
    if (countryName.length) {
      res.status(200).send(countryName);
    } else {
      res.status(400).json({ message: "Country not found" });
    }
  } else {
    res.status(200).send(totalCountries);
  }
}); */

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

/* router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let totalCountries = await getCountries();
  if (id) {
    let countryId = await totalCountries.filter(
      (element) => element.id == id.toUpperCase()
    );
    if (countryId.length) {
      res.status(200).send(countryId);
    } else {
      res.status(400).json({ message: "Country not found" });
    }
  }
}); */

module.exports = router;
