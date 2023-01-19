import './App.css';
import { Route } from "react-router-dom";
import {InitilaPage, Home, Form, NavBar} from "./components/Home";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={InitilaPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/form" component={Form} />
    </div>
  );
}

export default App;
