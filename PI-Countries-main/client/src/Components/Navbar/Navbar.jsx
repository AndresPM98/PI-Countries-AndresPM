import React from "react";
import { Link } from "react-router-dom";
import Search from "../Searchbar/Searchbar";
import "./Navbar.css"



const Navbar = ()=>{
  
    return(
        <div className="Nav">
            <Link to="/activity-form"><button className="ButtonActCrea">Create Activity</button></Link>
            <Search/>
        </div>
    ) 
}

export default Navbar; 