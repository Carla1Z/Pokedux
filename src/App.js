import { useEffect } from "react";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import getPokemons from "./api";
import logo from "./statics/logo.svg";
import "./styles/App.css";

function App() {
  useEffect(() => {
    const fetchPokemons = async () => {
      await getPokemons();
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
        <PokemonList />
      </Col>
    </div>
  );
}

export default App;
