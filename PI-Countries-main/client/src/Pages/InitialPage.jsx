import React from "react";
import { Link } from "react-router-dom";

const InitialPage = ()=>{
    return(
        <>
            <h1>InitialPage</h1>
            <Link to="/home"><button>HOME</button></Link>
            <input type="search" />
        </>
    )
}

export default InitialPage;