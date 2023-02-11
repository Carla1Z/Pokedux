import { useEffect } from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import { getPokemons } from "./api";
import { setPokemons as setPokemonsActions } from "./actions";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import "./styles/App.css";

function App({ pokemons, setPokemons }) {
  // console.log("pokemons", pokemons)
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes);
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
        <PokemonList pokemons={pokemons} />
      </Col>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
