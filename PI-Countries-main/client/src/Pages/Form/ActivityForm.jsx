import { connect } from "react-redux";
import React from "react";
import { createActivity } from "../../Redux/Actions";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = (props)=>{

    const [form,setForm] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countryId:"",
    })

    const handleChange = (event) => {
        const property=event.target.name;
        const value = event.target.value;

        setForm({
            ...form,
            [property]:value
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        props.createActivity({
            ...form,
        });
        alert("Ativity create");
    }

    return(
        <>
        <Link to="/home"><button>HOME</button></Link>
        <hr/>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input placeholder="Name..." name="name" value={form.name} onChange={handleChange} />
           </div>
            <div>
                <label>Difficulty</label>
                <input placeholder="Difficulty..." name="difficulty" value={form.difficulty} onChange={handleChange} />
           </div>
            <div>
                <label>Duration</label>
                <input placeholder="Duration..." name="duration" value={form.duration} onChange={handleChange} />
           </div>
            <div>
                <label>Season</label>
                <input placeholder="Season..." name="season" value={form.season} onChange={handleChange} />
           </div>
            <div>
                <label>CountryId</label>
                <input placeholder="CountryId..." name="countryId" value={form.countryId} onChange={handleChange} />
            </div>
            <button type="submit">SUBMIT</button>          
        </form>
        </>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        createActivity:(activity)=>{dispatch(createActivity(activity))}
    }
}

export default connect(null,mapDispatchToProps)(Form);