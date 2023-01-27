import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_DETAIL, FILTER_BY_CONTINENT, GET_ACTIVITIES, FILTER_BY_ACTIVITY/* , FILTER_BY_POPULATION*/, ORDER_BY_NAME  } from "./Actions";

const initialState = {
allCountries:[],
countries:[],
detail:{},
activities:[],
};

const rootReducer = (state = initialState, action) => {
switch (action.type) {
case GET_COUNTRIES:
return {
...state,
countries: action.payload,
allCountries: action.payload,
};
case GET_COUNTRIES_BY_NAME:
return{
...state,
countries: action.payload
};
case GET_DETAIL:
return {
...state,
detail: action.payload,
};

case FILTER_BY_CONTINENT:
  const all = state.allCountries;
  const filter = action.payload === 'Continents' ? all : all.filter(e => e.continent === action.payload);
  return{
      ...state,
      countries: filter
  }

case  GET_ACTIVITIES:    
  return{
      ...state,
      activities: action.payload
  }

case FILTER_BY_ACTIVITY: 
    const todos = state.allCountries;
    const hasActivity = todos.filter( e => e.Activities.length !== 0)
    const nuevoArr = hasActivity.filter(e => {
      for(let i=0; i<e.Activities.length; i++){
        if(e.Activities[i].name === action.payload) return true
      } return false
    })
  return{
      ...state,
      countries: nuevoArr
  }
  case ORDER_BY_NAME:
    let orderCountriesByName = action.payload === "ASC" ? state.countries.sort((a, b) => {
      if (a.name < b.name) {
        return -1;    
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }) :
      state.countries.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      })

    return {
      ...state,
      countries: orderCountriesByName
    }

default:
return {
  ...state,
  };
}
};

export default rootReducer;