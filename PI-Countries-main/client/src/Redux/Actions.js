export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";



export const getCountries = () => {
  return function (dispatch) {
    fetch('http://localhost:3001/countries')  
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_COUNTRIES, payload: data })
      );
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
  