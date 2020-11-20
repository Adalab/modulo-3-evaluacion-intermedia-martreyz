import "../stylesheets/Pokemon.scss";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const types = props.types.map((type, i) => {
    return (
      <li key={i} className="main__list-typesItem">
        {type}
      </li>
    );
  });
  const addToFavourites = (ev) => {
    const pokemonIndex = ev.currentTarget.id;
    props.addToFavourites(pokemonIndex);
  };

  return (
    <li
      onClick={addToFavourites}
      id={props.index}
      key={props.id}
      className={"main__list-item " + props.classN}
    >
      <img
        className="main__list-img"
        title={"Imagen de " + props.name}
        src={props.url}
        alt={props.name}
      />
      <h2 className="main__list-title">{props.name}</h2>
      <ul className="main__list-types">{types}</ul>
    </li>
  );
};

Pokemon.defaultProps = {
  name: "Pokemon anónimo",
  url: "../images/pokedex.png",
  types: "No pertenece a ningún tipo",
};

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.array,
};

export default Pokemon;
