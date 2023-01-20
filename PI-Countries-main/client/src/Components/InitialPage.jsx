import React from "react";
import { Link } from "react-router-dom";

const InitialPage = ()=>{
    return(
        <>
            <h1>InitialPage</h1>
            <Link to="/"><button>HOME</button></Link>
        </>
    )
}

export default InitialPage;