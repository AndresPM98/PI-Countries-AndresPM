import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../Components/Cards";


const Home = ()=>{
  
    return(
        <>
            <h1>Home</h1>
            <Link to="/activity-form"><button>Form</button></Link>
            <button>Name</button>
                <input type="search" placeholder="Buscar por nombre"/>
            <button>Continent</button>
                <input type="search" placeholder="Buscar por continente"/>
            <button>Activity</button>
                <input type="search" placeholder="Buscar por actividad"/>
            <button>A-Z</button><button>Z-A</button>
            <hr/>
            <Cards></Cards>
            
        </>
    ) 
}

export default Home; 
