import React, { useEffect } from "react";
import { getCountries, filterByContinent, getActivities, filterByActivity, orderByName, orderByPopulation } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
const dispatch = useDispatch();
const activities = useSelector(state => state.activities);

function handleFilterByContinent(event) {
dispatch(filterByContinent(event.target.value));
};

function handleFilterActivities (event){
dispatch(filterByActivity(event.target.value))
};

function handleOrderAZ(event){
  dispatch(orderByName(event.target.value))
}
function handleOrderPop(event) {
  dispatch(orderByPopulation(event.target.value));
  
}

useEffect(() => {
  dispatch(getCountries());
  dispatch(getActivities())
}, [dispatch]);


return (

<div>
<select onChange={(event) => handleOrderAZ(event)}>
                <option value={'asc'}>A-Z</option>
                <option value={'desc'}>Z-A</option>
  </select>  
  <select onChange={(event) => handleOrderPop(event)}>
            <option>Population</option>
            <option value={"HIGHER_POPULATION"}>HIGHER POPULATION</option>
            <option value={"LESS_POPULATION"}>LOWER POPULATION</option>
          </select>
  <select onChange={handleFilterByContinent}>
    <option value="Continents">Continents</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Africa">Africa</option>
    <option value="Oceania">Oceania</option>
    <option value="Antarctic">Antarctic</option>
  </select>
<select onChange={handleFilterActivities}>
  <option value="Activities" >Activities</option>
  {activities !== "No activities" && activities.map(e => {
  return (<option value={e.name} key={e.name}>{e.name}</option>)
  })}
 </select> 
</div>
);
};


export default Filters;