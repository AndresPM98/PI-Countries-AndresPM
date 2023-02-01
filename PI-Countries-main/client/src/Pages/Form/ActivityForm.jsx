import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postActivities, getActivities } from "../../Redux/Actions";
import { Link } from "react-router-dom";
import "./Form.css"


export default function ActivityCreate() {

  const history = useHistory();  // Te manda a una pagina indicada en el hadller submit 

  const [form,setForm] = useState({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countryId: [],
  });

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  //const activities = useSelector((state) => state.activities);

  const [errors, setErrors] = useState({});

  let [disEna, setDisEna] = useState(false); //disEna es para desabilitar el boton cuando esta todo completo
          
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

          const handleDelete = (i) => {
            const updatedCountryId = form.countryId.filter((element => element !== i));
            setForm({
              ...form,
              countryId: updatedCountryId
            });
            setDisEna(updatedCountryId.length !== 0);
          };

    const handleSelect = (e) => {
        setForm({ 
          ...form,
          countryId: [...form.countryId, e.target.value]
        })
      };

    return(
      <div className="FondoForm">

            <h3 className="TitleForm">Plan your activity</h3>

        <form onSubmit={handleSubmit} id={"formulario"} className="Form">

            <div className="Name">
                <label>Name</label>
                <input 
                placeholder="Name..." 
                name={"name"}
                key='name'
                value={form.name} 
                onChange={(e) => handleOnChange(e)}/>
           </div>
           {errors.name && <p className="error">{errors.name}</p>}


           <div className="Difficulty">
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

            <div className="Duration">
                <label>Duration</label>
                <input 
                placeholder="Duration in hours..." 
                name={"duration" }
                key='duration'
                value={form.duration} 
                onChange={(e) => handleOnChange(e)} />
           </div>
           {errors.duration && <p className="error">{errors.duration}</p>}

            <div className="Seasons">
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
          <div className="Countries">
            <select onChange={(e) => handleSelect(e)} key='countryId'>
              <option className="op"> Countries </option>
                {countries
                  .sort((a, b) => (a.name > b.name ? 1 : -1))
                  .map((v) => (
                    <option className="op" value={v.id}>{v.name}</option>
                  ))}
            </select>
          </div>

          <div className="ButtonX">
            {form.countryId.map((country) => (
              <div>
                <input type='button' value='X' onClick={() => handleDelete(country)}/>
                <p>{country}</p>
              </div>
            ))} 
          </div> 

          <div className="ButtonSub">
            <button  disabled={!disEna && "disabled"} type="submit">Create Activity</button>    
            {!disEna ? <p>Revise todos los campos</p> : <p></p>} 
          </div> 
          <div className="ButtonHome">
          </div> 
        </form>

          <Link to="/home"><button className="ButtonHomeForm">BACK HOME</button></Link>
          
        </div>
    )
}
