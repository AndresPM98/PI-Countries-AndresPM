import { GET_COUNTRIES,GET_COUNTRIES_BY_NAME, GET_DETAIL, FILTER_BY_CONTINENT } from "./Actions";

const initialState = {
    allCountries:[],
    countries:[],
    detail:[],
    activities:[], 
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES:
        return {
          ...state,
          countries: action.payload,
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
        const allCountries = state.allCountries;
        const filter = action.payload === 'Continents' ?
         allCountries : allCountries.filter(e => e.continente === action.payload);
          return{
          ...state,
          countries: filter
              }
        
       default:
        return {
          ...state,
          };
        }
      };

export default rootReducer;