import React from "react";
import { Link } from "react-router-dom";
import Search from "../Searchbar/Searchbar";
import Filter from "../Filter/Filter";



const Navbar = ()=>{
  
    return(
        <>
            <Link to="/activity-form"><button>Form</button></Link>
            <Search/>
            <Filter/>    
        </>
    ) 
}

export default Navbar; 