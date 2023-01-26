import { GET_COUNTRIES,GET_COUNTRIES_BY_NAME, GET_DETAIL, FILTER_BY_CONTINENT, POST_ACTIVITIES, GET_ACTIVITIES, FILTER_BY_ACTIVITY } from "./Actions";

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
              ...state
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
                      if(e.Activities[i].name == action.payload) return true
                  }
              })
              return{
                  ...state,
                  countries: nuevoArr
              }
               
        
       default:
        return {
          ...state,
          };
        }
      };
      

export default rootReducer;