import React, { useEffect, useState } from "react";
import { getCountries, filterByContinent, getActivities, filterByActivity, orderByName, orderByPopulation } from "../../Redux/Actions";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import Paginado from "../Paginated/Paginated"
import Card from "../Card/Card";
import "./Cards.css"

const Filters = () => {
const dispatch = useDispatch();
const activities = useSelector(state => state.activities);
const countries = useSelector((state) => state.countries);
let activityNames = [];

const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const currentCountry = countries.slice(firstCountry, lastCountry);
  const [, setOrden] = useState('');

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

function handleFilterByContinent(event) {
dispatch(filterByContinent(event.target.value));
setCurrentPage(1);
};

function handleFilterActivities (event){
dispatch(filterByActivity(event.target.value))
setCurrentPage(1);
};

function handleOrderAZ(event){
  dispatch(orderByName(event.target.value))
  setCurrentPage(1);
  setOrden(`Ordenado ${event.target.value}`)
}
function handleOrderPop(event) {
  dispatch(orderByPopulation(event.target.value));
  setCurrentPage(1);
  setOrden(`Ordenador ${event.target.value}`);
}

useEffect(() => {
  dispatch(getCountries());
  dispatch(getActivities())
}, [dispatch]);


return (

<div className="FilterConteiner">
<select onChange={(event) => handleOrderAZ(event)} className="OrderAZ">
<option>Order</option>
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
      <div>
      <Paginado
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        paginado={paginado}
      /> 
      </div>
      <div className='Cards__Box'>
        {currentCountry?.map((country) => {
                return (
                    <Card
                        key={country.id}
                        id={country.id}
                        flag={country.flag}
                        name={country.name}
                        continent={country.continent}
                    />
                    );
                  })}
                </div> 
</div>
);
};


export default Filters; 

