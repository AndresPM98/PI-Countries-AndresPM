import './App.css';
import { Route } from "react-router-dom";
import {InitialPage, Home, Form, Detail, PersonalInfo} from "./Pages"



function App() {
  return (
    <div className="App">
     
      <Route exact path="/" component={InitialPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/activity-form" component={Form} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/personal-info" component={PersonalInfo} />
      
    </div>
  );
}

export default App;
