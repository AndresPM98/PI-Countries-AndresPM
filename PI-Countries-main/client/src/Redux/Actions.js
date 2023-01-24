import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";


export const getCountries = () => {
  return async function (dispatch) {
    const bdInfo = await axios.get('http://localhost:3001/countries');  
    const countries = bdInfo.data
    dispatch({ type: GET_COUNTRIES, payload: countries })
  };
};

/* export const getCountries = () => {
  return function (dispatch) {
    fetch('http://localhost:3001/countries')  
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_COUNTRIES, payload: data })
      );
  };
}; */

export const getCountry = (id) => {
  return async function (dispatch) {
    const bdInfo = await axios.get(`http://localhost:3001/countries/${id}`);  
    const country = bdInfo.data
    dispatch({ type: GET_COUNTRY, payload: country })
  };
};
 
export const filterByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
}

 
export const createActivity = (activity) => {
    return {
      type: CREATE_ACTIVITY,
      payload: activity,
    };
  };
  