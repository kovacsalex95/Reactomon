import Navbar from "./components/Navbar";
import './App.css';

function App() {

  const navbarItems = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "Pokemons",
      url: "/pokemons"
    },
    {
      name: "Types",
      url: "/types"
    }
  ];

  return (
    <div className="wrapper">
      <Navbar items={navbarItems} />
      <label>Hello world!</label>
    </div>
  );
}

export default App;
