import React from "react";
import { Link } from "react-router-dom";
import Search from "../Searchbar/Searchbar";
import Filter from "../Filter/Filter";
import "./Navbar.css"



const Navbar = ()=>{
  
    return(
        <div className="Nav">
            <Link to="/activity-form"><button>Activity Create</button></Link>
            <Search/>
            <Filter/>    
        </div>
    ) 
}

export default Navbar; 