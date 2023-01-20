import { connect } from "react-redux";
import React from "react";
import { createActivity } from "../Redux/Actions";

const Form = (props)=>{

    const [form,setForm] = React.useState({
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
            id: Date.now(),
            image: "http://localhost:3001/countries"
        });
        alert("Ativity create");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Name..." name="name" value={form.name} onChange={handleChange} />
            <input placeholder="Difficulty..." name="difficulty" value={form.difficulty} onChange={handleChange} />
            <input placeholder="Duration..." name="duration" value={form.duration} onChange={handleChange} />
            <input placeholder="Season..." name="season" value={form.season} onChange={handleChange} />
            <input placeholder="CountryId..." name="countryId" value={form.countryId} onChange={handleChange} />
            <button type="submit">SUBMIT</button>          
        </form>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        createActivity:(activity)=>{dispatch(createActivity(activity))}
    }
}

export default connect(null,mapDispatchToProps)(Form);