import { useDispatch } from "react-redux";
import StarButton from "./StarButton";
import { setFavorite } from "../actions";
import style from "../styles/components/PokemonCard.module.css";

const PokemonCard = ({ name, image, abilities, types, id, favorite }) => {
  const dispatch = useDispatch();

  const abilitiesPokemon = (abilities) => {
    return abilities.map((el) => el.ability.name);
  };

  const typesString = types.map((pokemon) => pokemon.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  const typesColors = {
    bug: { color: "#94BC4A" },
    ice: { color: "#70CBD4" },
    dark: { color: "#736C75" },
    fire: { color: "#EA7A3C" },
    rock: { color: "#B2A061" },
    water: { color: "#539AE2" },
    fairy: { color: "#E397D1" },
    ghost: { color: "#846AB6" },
    grass: { color: "#71C558" },
    steel: { color: "#89A1B0" },
    dragon: { color: "#6A7BAF" },
    flying: { color: "#7DA6DE" },
    ground: { color: "#CC9F4F" },
    normal: { color: "#AAB09F" },
    poison: { color: "#B468B7" },
    psychic: { color: "#E5709B" },
    fighting: { color: "#CB5F48" },
    electric: { color: "#E5C531" },
  };

  return (
    <div className={style.card}>
      <span className={style.title}>
        <h4 className={style.name}>{name}</h4>
        <StarButton isFavorite={favorite} onClick={handleOnFavorite} />
      </span>
      <figure className={style.container}>
        <img src={image} alt={name} className={style.pokemon} />
      </figure>
      <p>{typesString}</p>
      <p>
        {abilitiesPokemon(abilities).map((el) => {
          return <p className={style.abilities}>{el}</p>;
        })}
      </p>
    </div>
  );
};

export default PokemonCard;
