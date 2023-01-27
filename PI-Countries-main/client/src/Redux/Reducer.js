import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_DETAIL, FILTER_BY_CONTINENT, GET_ACTIVITIES, FILTER_BY_ACTIVITY, ORDER_BY_POPULATION, ORDER_BY_NAME, POST_ACTIVITIES  } from "./Actions";

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
      
      case FILTER_BY_CONTINENT:
        const allCont = state.allCountries;
        const filterCont = action.payload === 'Continents' ? allCont : allCont.filter(e => e.continent === action.payload);
        return{
            ...state,
            countries: filterCont
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

      case ORDER_BY_POPULATION:
        let ordPop = [...state.allCountries];
        let orderCountriesByPopulation =
         action.payload === "HIGHER_POPULATION"
          ? ordPop.sort((a, b) => {
          if (a.population < b.population) {
            return 1;
          }else if (a.population > b.population) {
            return -1
          }else{
          return 0;
          }
        }) : 
        ordPop.sort((a, b) => {
            if (a.population < b.population) {
              return -1;
            }else if (a.population > b.population) {
              return 1;
            }else{
            return 0;
            }
          })
        
        return {
          ...state,
          countries: orderCountriesByPopulation
        }

default:
return {
  ...state,
  };
}
};

export default rootReducer;

/* 
HACER QUE LOS FILTROS FUNCIONEN EN CINJUNTO
case 'FILTER_BY_GENRE':

        let juegos = action.payload
    if (state.games.length === 0) {
        state.games = state.allGames
    }
    state.games = state.games.filter(videogames => videogames.genres?.includes(juegos))
    if (action.payload === "all") state.games = state.allGames
    if (state.games.length === 0) {
        alert("No hay resultados")
        state.games = state.allGames
    }
    return {
        ...state,
        games: state.games
    }


        case 'FILTER_BY_RATING':
            let sorted2 = action.payload === 'desc' ?
    state.games.sort((a, b) => {
        if (a.rating > b.rating) {
            return 1;
        }
        if (a.rating < b.rating) {
            return -1;
        }
        return 0;
    }) :
    state.games.sort((a, b) => {
        if (a.rating > b.rating) {
            return -1;
        }
        if (a.rating < b.rating) {
            return 1;
        }
        return 0;
    });


    return {
        ...state,
        games: sorted2
    }
            

        case 'FILTER_BY_ABC':
            let sorted = action.payload === 'asc' ?
    state.games.sort(( a, b ) => {
        if(a.name > b.name) {
            return 1;
        }
        if(a.name < b.name) {
            return -1;
        }
        return 0;
    }) :
    state.games.sort(( a, b ) => {
        if(a.name > b.name) {
            return -1;
        }
        if(a.name < b.name) {
            return 1;
        }
        return 0;
    })
    return{
        ...state,
        games : sorted
    } */