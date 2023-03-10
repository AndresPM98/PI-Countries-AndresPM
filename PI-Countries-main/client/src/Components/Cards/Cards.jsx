import React, { useEffect, useState } from "react";
import { getCountries, filterByContinent, getActivities, filterByActivity, orderByName, orderByPopulation } from "../../Redux/Actions";
import { useDispatch, useSelector} from "react-redux";
import Paginado from "../Paginated/Paginated"
import Card from "../Card/Card";
import "./Cards.css"

const Filters = () => {
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities);
  const countries = useSelector((state) => state.countries);
  let activityNames = [];
  
  const [currentPage, setCurrentPage] = useState(1); // crea un nueevo estado con valor 1
  const cardsPerPage = currentPage === 1 ? 9 : 10; // cartas por pagina = si la pagina es 1 son 9 elementos sino 10 
  const lastCard = currentPage * cardsPerPage; // (ultima carta) 9, 20, 30, 40, 50, 60... (se maneja con el lugar en el array)
  const firstCard = lastCard - cardsPerPage; // la primera 0, 2º seria 20-10=10 (esto es para resetear el numero de cartas en cada pagina) 
  const currentCards = countries.slice(firstCard, lastCard); // (tarjetas actuales) con slice corta un segmente del array. 
  const [, setOrden] = useState('');
  
  const paginado = (pageNumber) => {  // setea el estado de currentPage de acuerdo al numero que se clickea.
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
  <div className="FondoCards">
  <div className="FilterConteiner">
  <label className="LabOr">Order</label>
  <select onChange={(event) => handleOrderAZ(event)} className="OrderAZ">
  <option value="all" className="Options">Default</option>
  <option value={'asc'} className="Options">A-Z</option>
  <option value={'desc'} className="Options">Z-A</option>
  </select>
  <label className="LabPo">Population</label>
  <select onChange={(event) => handleOrderPop(event)} className="OrderPop">
  <option value="all">All Countries</option>
  <option value={"Higher"} className="Options">Higher</option>
  <option value={"Less"} className="Options">Less</option>
  </select>
  <label className="LabCo">Continent</label>
  <select onChange={handleFilterByContinent} className="OrderCont">
  <option value="Continents" className="Options">All Countries</option>
  <option value="Americas" className="Options">Americas</option>
  <option value="Asia" className="Options">Asia</option>
  <option value="Europe" className="Options">Europe</option>
  <option value="Africa" className="Options">Africa</option>
  <option value="Oceania" className="Options">Oceania</option>
  <option value="Antarctic" className="Options">Antarctic</option>
  </select>
  <label className="LabAc">Activities</label>
  <select onChange={handleFilterActivities} className="OrderAct">
  <option value="Activities" className="Options">All Countries</option>
          {activities !== "No activities" && activities.map(e => {
            if (!activityNames.includes(e.name)) {
              activityNames.push(e.name);
              return (<option value={e.name} key={e.name}>{e.name}</option>)
            }
          })}
        </select>
        <div className='Cards__Box'>
        {currentCards.map((country) => {
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
         <div className="Paginado">
        <Paginado
          countriesPerPage={cardsPerPage}
          countries={countries.length}
          paginado={paginado}
        /> 
        </div>         
  </div>
  </div>
)};
  export default Filters;
