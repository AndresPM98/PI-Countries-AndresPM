import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams  } from "react-router-dom";
import { getDetail } from "../../Redux/Actions";
import "./Detail.css"


const Country = (props)=>{
    const dispatch = useDispatch();
    const country = useSelector((state) => state.detail);
    
    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    return(
        <div className="detail">
            <h1 className="title">Your Country</h1>
            <Link to="/home"><button className="buttonHome">BACK HOME</button></Link>
            <Link to="/activity-form"><button className="ButtonAct">Create Activity </button></Link>
            { country !== null &&
            <div className="BoxConteiner">
                <div>
                    <img className="imgCountry" 
                        src={country.flag} 
                        alt={country.name}
                        /> 
                </div>
                <div className="CardInfo">
                <ul>
                    <h3 className="h3">Name: {country.name}</h3>
                    <h3 className="h3">Country ID: {country.id}</h3>
                    <h3 className="h3">Capital: {country.capital}</h3>
                    <h3 className="h3">Continent: {country.continent}</h3>
                    <h3 className="h3">Subregion: {country.subregion}</h3>
                    <h3 className="h3">Area: {country.area} km</h3>
                    <h3 className="h3">Population: {country.population}</h3>
                    <h3 className="h3">Activities: 
                    {country.Activities && country.Activities.map(e => 
                        e.name+': "Difficulty: '+e.difficulty+', duratyion: '+e.duration+', season: '+e.season+'." ')}</h3>
                </ul>
                </div>
            </div> 
            }
        </div>
    )
}

export default Country;
