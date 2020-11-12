import Pokemon from "./Pokemon";
import "../stylesheets/PokeList.scss";

const PokeList = (props) => {
  const cards = props.data.map((pokemon) => {
    return (
      <Pokemon name={pokemon.name} url={pokemon.url} types={pokemon.types} />
    );
  });

  return <ul className="main__list">{cards}</ul>;
};

export default PokeList;
