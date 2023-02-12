import { useDispatch } from "react-redux";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import { setFavorite } from "../actions";

const PokemonCard = ({ name, image, abilities, types, id, favorite }) => {
  const dispatch = useDispatch();

  const abilitiesPokemon = (abilities) => {
    return abilities.map((el) => el.ability.name).join(", ");
  };

  const typesString = types.map((pokemon) => pokemon.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta
        title={"Tipo"}
        description={typesString}
        style={{ marginBottom: 10 }}
      />
      <Meta title={"Habilidad"} description={abilitiesPokemon(abilities)} />
    </Card>
  );
};

export default PokemonCard;
