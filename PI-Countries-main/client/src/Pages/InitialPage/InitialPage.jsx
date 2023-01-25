import React from "react";
import { Link } from "react-router-dom";
import "./InitialPage.css";

const InitialPage = ()=>{
    return(
        <div className="initial-page">
            <h1 className="welcome">Welcome...</h1>
            <Link className="linkHome" to="/home"><button className="buttonIP">HOME</button></Link>
        </div>
    )
}

export default InitialPage;