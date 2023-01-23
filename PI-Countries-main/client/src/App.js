import './App.css';
import { Route } from "react-router-dom";
import InitilaPage from "./Components/InitialPage";
import Home from "./Components/Home"
import Form from './Components/ActivityForm';
import Country from './Components/Country';
import PersonalInfo from './Components/PersonalInfo';



function App() {
  return (
    <div className="App">
     
      <Route exact path="/" component={InitilaPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/activity-form" component={Form} />
      <Route exact path="/country-card" component={Country} />
      <Route exact path="/personal-info" component={PersonalInfo} />
      
    </div>
  );
}

export default App;
