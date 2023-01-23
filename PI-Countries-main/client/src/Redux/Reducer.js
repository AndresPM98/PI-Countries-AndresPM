import { GET_COUNTRIES, FILTER_BY_CONTINENT, CREATE_ACTIVITY } from "./Actions";

const initialState = {
    countries:[],
    country:[],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES:
        return {
          ...state,
          countries: action.payload,
        };

      case FILTER_BY_CONTINENT:
        return {
          
        }
        
      case CREATE_ACTIVITY:
        return {
        ...state,
        countries: [...state.countries, action.payload],
      };

        default:
            return {
              ...state,
            };
        }
      };

export default rootReducer;