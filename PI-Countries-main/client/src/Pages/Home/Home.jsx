import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.module.css"
import Cards from "../../Components/Cards/Cards"
import { useEffect, useState } from "react";

  const Home = ()=>{
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return(
        <div className="cards-container">
            {isLoading ? <img src={require("../../Components/Imagenes/Loading_2.gif")} 
                              alt="Loading"
                              style={{ width: "50px", height: "50px", marginTop: "25%"}}/>: <>
                <Navbar />
                <Cards />
            </>}
        </div>
    ) 
}
export default Home; 
