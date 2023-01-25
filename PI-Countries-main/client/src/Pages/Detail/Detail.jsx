import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams  } from "react-router-dom";
import { getDetail } from "../../Redux/Actions";



const Country = (props)=>{
    const dispatch = useDispatch();
    const country = useSelector((state) => state.detail);
    
    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    return(
        <>
            <h1>Detail</h1>
            <Link to="/home"><button>HOME</button></Link>
            <hr/>
            { country !== null &&
                <div>
                <img src={country.flag} alt={country.name}/> 
                <h3>{country.name}</h3>
                <h3>{country.capital}</h3>
                <h3>{country.continente}</h3>
                <h3>{country.subregion}</h3>
                <h3>Area: {country.area} km</h3>
                <h3>Population: {country.population}</h3>
                <h3>Activities: {country.Activities && country.Activities.map(e => e.name+': "Difficulty: '+e.difficulty+', duratyion: '+e.duration+', season: '+e.season+'." ')}</h3>
            </div> 
            }
        </>
    )
}

export default Country;
