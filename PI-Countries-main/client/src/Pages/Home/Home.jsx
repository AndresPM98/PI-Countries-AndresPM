import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Cards from "../../Components/CardsContainer/Cards";
import "./Home.module.css"



const Home = ()=>{
  
    return(
        <div className="cards-container">
            <Navbar/>
            <Cards/>
        </div>
    ) 
}

export default Home; 
