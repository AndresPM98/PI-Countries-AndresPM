import React, { useEffect } from "react";
import { getCountries, filterByContinent, getActivities, filterByActivity, orderByName, orderByPopulation } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.css"

const Filters = () => {
const dispatch = useDispatch();
const activities = useSelector(state => state.activities);
let activityNames = [];

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

<div className="FilterConteiner">
<select onChange={(event) => handleOrderAZ(event)} className="OrderAZ">
                <option value={'asc'} className="Options">A-Z</option>
                <option value={'desc'} className="Options">Z-A</option>
  </select>  
  <select onChange={(event) => handleOrderPop(event)} className="OrderPop">
            <option>Population</option>
            <option value={"HIGHER_POPULATION"} className="Options">HIGHER POPULATION</option>
            <option value={"LESS_POPULATION"} className="Options">LOWER POPULATION</option>
          </select>
  <select onChange={handleFilterByContinent} className="OrderCont">
    <option value="Continents" className="Options">Continents</option>
    <option value="Americas" className="Options">Americas</option>
    <option value="Asia" className="Options">Asia</option>
    <option value="Europe" className="Options">Europe</option>
    <option value="Africa" className="Options">Africa</option>
    <option value="Oceania" className="Options">Oceania</option>
    <option value="Antarctic" className="Options">Antarctic</option>
  </select>
  <select onChange={handleFilterActivities} className="OrderAct">
        <option value="Activities" className="Options">Activities</option>
        {activities !== "No activities" && activities.map(e => {
          if (!activityNames.includes(e.name)) {
            activityNames.push(e.name);
            return (<option value={e.name} key={e.name}>{e.name}</option>)
          }
        })}
      </select>
</div>
);
};


export default Filters;