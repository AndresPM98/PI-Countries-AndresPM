import React, { useState } from "react";
import { filterByContinent } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

const FilterContinent = () => {
  const [continent, setContinent] = useState("All");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setContinent(event.target.value);
    dispatch(filterByContinent(event.target.value));
  };

  return (
    <nav>
      <button>Filter by Continent</button>
      <select value={continent} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </nav>
  );
};

export default FilterContinent;
