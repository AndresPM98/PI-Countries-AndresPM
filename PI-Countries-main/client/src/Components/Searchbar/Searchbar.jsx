import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getCountryByName} from '../../Redux/Actions';

export default function Search(){
    const[input, setInput] = useState('');
    const dispatch = useDispatch();

    function handleOnChange(e){
        setInput(e.target.value)
    }
    function handleOnClick(e){
        e.preventDefault()
        dispatch(getCountryByName(input))
    }

    return (
         <div>
             <button onClick={handleOnClick}>Search</button>
             <input type='text' onChange={handleOnChange} placeholder='Country...' />
         </div>
     )
}
