import React from "react";
import { Link } from "react-router-dom";
import Cards from "../Components/Cards";

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