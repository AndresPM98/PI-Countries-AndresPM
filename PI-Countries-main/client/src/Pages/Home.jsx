import React from "react";
import { Link } from "react-router-dom";
import Cards from "../Components/Cards";


const Home = ()=>{
  
    return(
        <>
            <h1>Home</h1>
            <Link to="/activity-form"><button>Form</button></Link>
            <hr></hr>
            <button>Search</button>
            <input type="search" placeholder="Buscar pais por nombre"/>
            <button>Continent</button>
            <button>Activity</button>
            <button>A-Z</button><button>Z-A</button>
            <Cards></Cards>
            
        </>
    ) 
}

export default Home; 
