import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const POST_ACTIVITIES = 'POST_ACTIVITIES';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const ORDER_BY_NAME = "ORDER_BY_NAME";


export const getCountries = () => {
  return async function (dispatch) {
    const bdInfo = await axios.get('http://localhost:3001/countries');  
    const countries = bdInfo.data
    dispatch({ type: GET_COUNTRIES, payload: countries })
  };
};

export const getCountryByName = (name)=> {
  return async function(dispatch){
      const res = await axios.get('http://localhost:3001/countries?name=' + name);
    dispatch({
      type: GET_COUNTRIES_BY_NAME,
      payload: res.data
    });
  }
}
 
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
};

export function postActivities(activity) {
  return async (dispatch) => {
    var response = await axios.post("http://localhost:3001/activity", activity);
    return dispatch({
      type: POST_ACTIVITIES,
      payload: response.data,
    });
  };
}
export function getActivities(){
  return async function(dispatch){
      const res = await axios.get('http://localhost:3001/activities');
    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data
    });
  }
}

export function filterByActivity(payload){
  return{
      type:FILTER_BY_ACTIVITY,
      payload
  }
}
  export function orderByPopulation(payload){
    return{
        type:ORDER_BY_POPULATION,
        payload
    }
  }

    export function orderByName(payload){
      return{
          type:ORDER_BY_NAME,
          payload,
      }
  }


   


  