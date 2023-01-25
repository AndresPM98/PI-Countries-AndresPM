import { GET_COUNTRIES, GET_DETAIL, FILTER_BY_CONTINENT } from "./Actions";

const initialState = {
    allCountries:[],
    countries:[],
    detail:[],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES:
        return {
          ...state,
          countries: action.payload,
        };

      case GET_DETAIL:
        return {
          ...state,
          detail: action.payload,
        };

      case FILTER_BY_CONTINENT:
          return {
          ...state,
          countries:
            action.payload === 'All'
              ? state.allCountries
              : state.allCountries.filter(
                (country) => country.continents === action.payload
              ),
            };
        
       default:
        return {
          ...state,
          };
        }
      };

export default rootReducer;