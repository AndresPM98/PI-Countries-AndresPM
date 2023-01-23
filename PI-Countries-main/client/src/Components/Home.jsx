import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
            <h1>Home</h1>
            <hr></hr>
            <Link to="/activity-form"><button>Form</button></Link>
            <input type="search" />
            <Cards></Cards> 
            
        </>
    )
}

export default Home;