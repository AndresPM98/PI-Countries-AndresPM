import React, { useEffect, useState } from "react";
import { getCountries, filterByContinent } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";

const Filters = (/* {handleSorts} */) => {
  const dispatch = useDispatch();
  // Obtén el estado de los países filtrados
  const filterCountry = useSelector((state) => state.countries);

  // Utiliza useEffect para detectar cambios en el estado y actualizar el componente
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleFilterCountry(event) {
    // Llama al dispatch de la acción filterByContinent con el valor seleccionado
    dispatch(filterByContinent(event.target.value));
  }
  
  return (
    <div>
      <select onChange={handleFilterCountry}>
        <option value="Continents">Continents</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
      </select>
      {/* Usa un condicional para verificar si el estado de los países filtrados está vacío */}
      
    </div>
  );
};


export default Filters;
 