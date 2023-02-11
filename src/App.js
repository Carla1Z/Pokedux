import Searcher from "./components/Searcher";
import { Col } from "antd";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import "./styles/App.css";

function App() {
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
