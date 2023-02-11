import axios from "axios";

const getPokemons = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export default getPokemons;
