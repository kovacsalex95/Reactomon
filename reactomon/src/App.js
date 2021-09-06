import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Pokemons from "./components/pages/Pokemons";
import PokemonDetails from "./components/pages/PokemonDetails";
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
        <Route path="/pokemon/">
          <PokemonDetails />
        </Route>
        <Route path="/types">
          <Types />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
