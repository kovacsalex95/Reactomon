import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Pokemons from "./components/pages/Pokemons";
import Types from "./components/pages/Types";

import './App.css';

function App() {
  return (
    <Router>

      <Navbar />

      <Switch>
        <Route path="/pokemons">
          <Pokemons />
        </Route>
        <Route path="/types">
          <Types />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
