import Pokemon from "./Pokemon";
import "../stylesheets/PokeList.scss";

const PokeList = (props) => {
  const cards = props.data.map((pokemon, index) => {
    if (props.favourites.includes(pokemon)) {
      return (
        <Pokemon
          classN="favourite"
          index={index}
          addToFavourites={props.addToFavourites}
          id={pokemon.id}
          name={pokemon.name}
          url={pokemon.url}
          types={pokemon.types}
        />
      );
    } else {
      return (
        <Pokemon
          classN=""
          index={index}
          addToFavourites={props.addToFavourites}
          id={pokemon.id}
          name={pokemon.name}
          url={pokemon.url}
          types={pokemon.types}
        />
      );
    }
  });

  return <ul className="main__list">{cards}</ul>;
};

export default PokeList;
