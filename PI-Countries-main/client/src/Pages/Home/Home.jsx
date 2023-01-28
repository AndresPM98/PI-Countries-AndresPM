import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.module.css"
import Cards from "../../Components/Cards/Cards";



const Home = ()=>{
  
    return(
        <div className="cards-container">
            <Navbar/>
            <Cards/>
        </div>
    ) 
}

export default Home; 
