import React from "react";
import { Link } from "react-router-dom";
import Search from "../Searchbar/Searchbar";


const Navbar = ()=>{
  
    return(
        <>
            <Link to="/activity-form"><button>Form</button></Link>
            <Search/>
            <button>Continent</button>
                <input type="search" placeholder="Buscar por continente"/>
            <button>Activity</button>
                <input type="search" placeholder="Buscar por actividad"/>
            <button>A-Z</button><button>Z-A</button>
            
        </>
    ) 
}

export default Navbar; 