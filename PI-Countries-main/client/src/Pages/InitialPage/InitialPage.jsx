import React from "react";
import { Link } from "react-router-dom";

const InitialPage = ()=>{
    return(
        <>
            <Link className="linkHome" to="/home"><button>HOME</button></Link>
        </>
    )
}

export default InitialPage;