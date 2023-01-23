export const GET_COUNTRIES = "GET_COUNTRIES";
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

export const createActivity = (activity) => {
    return {
      type: CREATE_ACTIVITY,
      payload: activity,
    };
  };
  