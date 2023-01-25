import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"



export const getCountries = () => {
  return async function (dispatch) {
    const bdInfo = await axios.get('http://localhost:3001/countries');  
    const countries = bdInfo.data
    dispatch({ type: GET_COUNTRIES, payload: countries })
  };
};
 

export const getDetail = (id) => {
  return async function (dispatch) {
    const details = await axios(`http://localhost:3001/countries/${id}`);
    return dispatch({
      type: GET_DETAIL,
      payload: details.data,
    });
  };
};

 
export const filterByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
}

  