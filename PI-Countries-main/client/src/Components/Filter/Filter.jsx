import React, { useEffect } from "react";
import { getCountries, filterByContinent, filterByActivity, orderByName } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
const dispatch = useDispatch();
const actividades = useSelector(state => state.activities);

function handleFilterCountry(event) {
dispatch(filterByContinent(event.target.value));
};

function handleFilterActivities (event){
dispatch(filterByActivity(event.target.value))
};

function handleSort(event) {
  event.preventDefault();
  dispatch(orderByName(event.target.value));
}

useEffect(() => {
  dispatch(getCountries());
}, [dispatch]);

return (

<div>
  <select onChange={(event) => {handleSort(event);}}>
        <option>Order</option>
        <option value={"ASC"}>A - Z</option>
        <option value={"DESC"}>Z - A</option>
  </select>
  <select onChange={handleFilterCountry}>
    <option value="Continents">Continents</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Africa">Africa</option>
    <option value="Oceania">Oceania</option>
    <option value="Antarctic">Antarctic</option>
  </select>
<select onChange={handleFilterActivities}>
  <option>Activity</option>
  {actividades !== "No activities" && actividades.map(e => {
  return (<option value={e.name} key={e.name}>{e.name}</option>)
  })}
 </select> 
</div>
);
};
export default Filters;