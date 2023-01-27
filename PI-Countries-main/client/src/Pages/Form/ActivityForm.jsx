import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postActivities, getActivities } from "../../Redux/Actions";
import "./Form.module.css"


/* 
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
          } */

export default function ActivityCreate() {

  const history = useHistory();

  const [form,setForm] = useState({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countryId: [],
  });

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);

  const [errors, setErrors] = useState({});

  let [disEna, setDisEna] = useState(false);
          
    useEffect(() => {
        dispatch(getActivities());
      }, [dispatch]);
  
       const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        validate({ ...form, [e.target.name]: e.target.value });
      }; 

    const handleSubmit = (e) => {
      e.preventDefault();
      if (Object.keys(errors).length > 0)
      return alert('You must complete the fields');
      dispatch(postActivities(form));
  
      setForm({
        name: '',
        duration: '',
        difficulty: '',
        season: '',
        countryId: []
      })
  
      alert('Activity Created');
      history.push("/home");
    };

    const handleActivities = (e) => {
      if (!form.countryId.includes(e.target.value)) {
        setForm({ ...form, countryId: [...form.countryId, e.target.value] });
        validate({ ...form, activities: [...form.activity, e.target.value] });
      } else {
        alert("El tipo ya fue seleccionado.");
      }
    };
    
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
            } else if (!form.countryId.length == 0) {
              errors.countryId = 'You must select a country'
            }
            //return errors
            setErrors(errors);
             handleDisable(errors);
          } 

          const handleDisable = (error) => {
            
        
            if (
              error?.name === undefined &&
              error?.duration === undefined &&
              error?.difficulty === undefined &&
              error?.season === undefined &&
              error?.countryId === undefined
            ) {
              setDisEna(true);
            } else {
              setDisEna(false);
            }
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

    return(
        <form onSubmit={handleSubmit} id={"formulario"}>
            <h3>Plan your activity</h3>

            <div>
                <label>Name</label>
                <input 
                placeholder="Name..." 
                name={"name" }
                key='name'
                value={form.name} 
                onChange={(e) => handleOnChange(e)}/>
           </div>
           {errors.name && <p className="error">{errors.name}</p>}


           <div>
           <label>Difficulty</label>
                <div className="difficulty-group">
                    <input type="radio" name="difficulty"  key='difficulty' id="difficulty1" value="1" onChange={(e) => handleOnChange(e)}/>
                    <label htmlFor="difficulty1">1</label>
                    <input type="radio" name="difficulty"  key='difficulty' id="difficulty2" value="2" onChange={(e) => handleOnChange(e)}/>
                    <label htmlFor="difficulty2">2</label>
                    <input type="radio" name="difficulty"  key='difficulty' id="difficulty3" value="3" onChange={(e) => handleOnChange(e)}/>
                    <label htmlFor="difficulty3">3</label>
                    <input type="radio" name="difficulty"  key='difficulty' id="difficulty4" value="4" onChange={(e) => handleOnChange(e)}/>
                    <label htmlFor="difficulty4">4</label>
                    <input type="radio" name="difficulty"  key='difficulty' id="difficulty5" value="5" onChange={(e) => handleOnChange(e)}/>
                    <label htmlFor="difficulty5">5</label>
                </div>
            </div>
            {errors.difficulty && <p className="error">{errors.difficulty}</p>}

            <div>
                <label>Duration</label>
                <input 
                placeholder="Duration in hours..." 
                name={"duration" }
                key='duration'
                value={form.duration} 
                onChange={(e) => handleOnChange(e)} />
           </div>
           {errors.duration && <p className="error">{errors.duration}</p>}

            <div>
            <label>Season</label>
            <select
              className="Form__Select"
              name={"season"}
              key='season'
              value={form.season}
              onChange={(e) => handleOnChange(e)}
            >
              <option>Seasons</option>
              <option value="winter">Winter</option>
              <option value="summer">Summer</option>
              <option value="autum">Autum</option>
              <option value="spring">Spring</option>
            </select>
            {errors.season && <p className="error">{errors.season}</p>}
            
           </div>
            {errors.countryId && <p className="error">{errors.countryId}</p>}
           <div>
            <select onChange={(e) => handleSelect(e)} key='countryId'>
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
          </div> 
          <div>
            <button  disabled={!disEna && "disabled"} type="submit">Create Activity</button>    
            {!disEna ? <p>Revise todos los campos</p> : <p></p>} 
          </div> 
          {/*  <div>
            <button disabled={!disEna && "disabled"} type={"submit"}>
              <svg
                class="css-i6dzq1"
                stroke-linejoin="round"
                stroke-linecap="round"
                fill="none"
                stroke-width="2"
                stroke="#942727"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
              Crear Activity
            </button>
            {!disEna ? <p>Revise todos los campos</p> : <p></p>}
          </div> */}
        </form>
    )
}
