import Searcher from "./components/Searcher";
import { Col } from "antd";
import PokemonList from "./components/PokemonList";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
        <PokemonList />
      </Col>
    </div>
  );
}

export default App;
