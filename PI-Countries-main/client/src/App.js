import './App.css';
import { Route } from "react-router-dom";
import InitilaPage from "./Components/InitialPage";
import Home from "./Components/Home"



function App() {
  return (
    <div className="App">
     
      <Route exact path="/" component={InitilaPage} />
      <Route exact path="/home" component={Home} />
      
    </div>
  );
}

export default App;
