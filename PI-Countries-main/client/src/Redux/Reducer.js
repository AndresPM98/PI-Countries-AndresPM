import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_DETAIL, FILTER_BY_CONTINENT, GET_ACTIVITIES, FILTER_BY_ACTIVITY/* , FILTER_BY_POPULATION*/, ORDER_BY_NAME, POST_ACTIVITIES  } from "./Actions";

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
  case POST_ACTIVITIES:
    return {
      ...state,
      countries: [...state.countries, action.payload],
    };

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
      let ordName = [...state.allCountries];
      let countryByName =
        action.payload === "asc"
          ? ordName.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              } else {
                return 0;
              }
            })
          : ordName.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              } else {
                return 0;
              }
            });
      return {
        ...state,
        countries: countryByName,
      };

default:
return {
  ...state,
  };
}
};

export default rootReducer;