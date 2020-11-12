import "../stylesheets/Pokemon.scss";

const Pokemon = (props) => {
  const types = props.types.map((type) => {
    return <li className="main__list-typesItem">{type}</li>;
  });
  return (
    <li className="main__list-item">
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

export default Pokemon;
