import { GET_COUNTRIES, CREATE_ACTIVITY } from "./Actions";

const initialState = {
    countries:[],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES:
        return {
          ...state,
          characters: action.payload,
        };
        
        case CREATE_ACTIVITY:
      return {
        ...state,
        myCountries: [...state.myCountries, action.payload],
      };

        default:
            return {
              ...state,
            };
        }
      };

export default rootReducer;