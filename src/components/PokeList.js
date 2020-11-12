import Pokemon from "./Pokemon";
import "../stylesheets/PokeList.scss";

const PokeList = (props) => {
  const cards = props.data.map((pokemon) => {
    const types = pokemon.types.map((type) => {
      return <li className="main__list-typesItem">{type}</li>;
    });
    return <Pokemon name={pokemon.name} url={pokemon.url} types={types} />;
  });

  return <ul className="main__list">{cards}</ul>;
};

export default PokeList;
