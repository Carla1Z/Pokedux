import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

const PokemonCard = ({ name, image, abilities }) => {
  const abilitiesPokemon = (abilities) => {
    return abilities.map((el) => el.ability.name).join(", ");
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description={abilitiesPokemon(abilities)} />
    </Card>
  );
};

export default PokemonCard;
