import "../stylesheets/Pokemon.scss";

const Pokemon = (props) => {
  return (
    <li className="main__list-item">
      <img
        className="main__list-img"
        title={"Imagen de " + props.name}
        src={props.url}
        alt={props.name}
      />
      <h2 className="main__list-title">{props.name}</h2>
      <ul className="main__list-types">{props.types}</ul>
    </li>
  );
};

export default Pokemon;
