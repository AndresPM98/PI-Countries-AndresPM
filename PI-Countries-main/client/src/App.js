import './App.css';
import { Route } from "react-router-dom";
import InitilaPage from "./Pages/InitialPage";
import Home from "./Pages/Home"
import Form from './Pages/ActivityForm';
import Country from './Pages/Country';
import PersonalInfo from './Pages/PersonalInfo';



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
