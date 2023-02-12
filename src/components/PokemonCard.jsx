import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

const PokemonCard = ({ name, image, abilities, types }) => {
  const abilitiesPokemon = (abilities) => {
    return abilities.map((el) => el.ability.name).join(", ");
  };

  const typesString = types.map((pokemon) => pokemon.type.name).join(", ");

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta title={"Tipo"} description={typesString} style={{marginBottom: 10}} />
      <Meta title={"Habilidad"} description={abilitiesPokemon(abilities)} />
    </Card>
  );
};

export default PokemonCard;
