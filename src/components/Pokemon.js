import "../stylesheets/Pokemon.scss";

const Pokemon = (props) => {
  const cards = props.data.map((pokemon) => {
    const types = pokemon.types.map((type) => {
      return <li className="main__list-typesItem">{type}</li>;
    });
    return (
      <li className="main__list-item">
        <img
          className="main__list-img"
          title={"Imagen de " + pokemon.name}
          src={pokemon.url}
          alt={pokemon.name}
        />
        <h2 className="main__list-title">{pokemon.name}</h2>
        <ul className="main__list-types">{types}</ul>
      </li>
    );
  });
  return cards;
};

export default Pokemon;
