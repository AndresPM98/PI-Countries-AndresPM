import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
//import Cards from "../../Components/CardsContainer/Cards";
import "./Home.module.css"
import Filters from "../../Components/Cards/Cards";



const Home = ()=>{
  
    return(
        <div className="cards-container">
            <Navbar/>
            <Filters/>
           {/*  <Cards/> */}
        </div>
    ) 
}

export default Home; 
