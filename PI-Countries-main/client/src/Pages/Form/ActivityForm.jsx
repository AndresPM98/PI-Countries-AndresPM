import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postActivities, getActivities } from "../../Redux/Actions";

const validate = (form)=>{
            let errors = {};
            if (!form.name) {
              errors.name = 'You must fill this field above';
            } else if (!form.duration) {
              errors.duration = 'You must fill this field';
            } else if (!form.difficulty) {
              errors.difficulty = 'You must choose the difficulty';
            } else if (!form.season) {
              errors.difficulty = 'You must choose the season';
            } else if (!form.countryId.length === 0) {
              errors.countryId = 'You must select a country'
            }
            return errors;
          }

export default function ActivityCreate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector((state) => state.allCountries);
    const [errors, setErrors] = useState({});
          

    const [form,setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: [],
    });

    useEffect(() => {
        dispatch(getActivities());
      }, [dispatch]);


      const handleChange = (event) => {
        const {name, value} = event.target;

        setErrors(validate({...form,[name]: value }));
        setForm({ ...form, [name]:value });
    };

    const handleDelete =(i) => {
        setForm({
          ...form,
          countryId: form.countryId.filter((element => element !== i))
        })
      };

    const handleSelect = (event) => {
        setForm({ 
          ...form,
          countryId: [...form.countryId, event.target.value]
        })
      };

    const handleSubmit=(event)=>{
        event.preventDefault();
        if (Object.keys(errors).length > 0)
        return alert('You must complete the fields');
        dispatch(postActivities(form));
        alert('Activity Created');
        setForm({
          name: '',
          duration: '',
          difficulty: '',
          season: '',
          countryId: []
        })
        history.push('/home')
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Plan your activity</h3>

            <div>
                <label>Name</label>
                <input 
                placeholder="Name..." 
                name="name" 
                value={form.name} 
                onChange={handleChange} />
           </div>
           {errors.name && <p className="error">{errors.name}</p>}


           <div>
           <label>Difficulty</label>
                <div className="difficulty-group">
                    <input type="radio" name="difficulty" id="difficulty1" value="1" onChange={handleChange}/>
                    <label htmlFor="difficulty1">1</label>
                    <input type="radio" name="difficulty" id="difficulty2" value="2" onChange={handleChange}/>
                    <label htmlFor="difficulty2">2</label>
                    <input type="radio" name="difficulty" id="difficulty3" value="3" onChange={handleChange}/>
                    <label htmlFor="difficulty3">3</label>
                    <input type="radio" name="difficulty" id="difficulty4" value="4" onChange={handleChange}/>
                    <label htmlFor="difficulty4">4</label>
                    <input type="radio" name="difficulty" id="difficulty5" value="5" onChange={handleChange}/>
                    <label htmlFor="difficulty5">5</label>
                </div>
            </div>
            {errors.difficulty && <p className="error">{errors.difficulty}</p>}

            <div>
                <label>Duration</label>
                <input 
                placeholder="Duration in hours..." 
                name="duration" 
                value={form.duration} 
                onChange={handleChange} />
           </div>
           {errors.duration && <p className="error">{errors.duration}</p>}

            <div>
            <label>Season</label>
            <select
              className="Form__Select"
              name="season"
              value={form.season}
              onChange={(e) => handleChange(e)}
            >
              <option value="winter">Winter</option>
              <option value="summer">Summer</option>
              <option value="autum">Autum</option>
              <option value="spring">Spring</option>
            </select>
            {errors.season && <p className="error">{errors.season}</p>}
            
           </div>
           {/*  {errors.countryId && <p className="error">{errors.countryId}</p>}
           <div>
            <select onChange={(e) => handleSelect(e)}>
              <option className="op"> Countries </option>
                {countries.map((v) => (
                  <option className="op" value={v.id}>{v.name}</option>
                ))}
            </select>
          </div>

          <div>
            {form.countryId.map((country) => (
              <div>
                <input type='button' value='X' onClick={() => handleDelete(country)}/>
                <p>{country}</p>
              </div>
            ))} 
          </div>  */}
          <div>
            <button type="submit">Create Activity</button>     
          </div>
        </form>
    )
}
