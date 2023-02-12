import PokemonCard from "./PokemonCard";
import "../styles/components/PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            abilities={pokemon.abilities}
            types={pokemon.types}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
