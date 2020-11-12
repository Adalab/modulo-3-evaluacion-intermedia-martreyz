import Pokemon from "./Pokemon";
import "../stylesheets/PokeList.scss";

const PokeList = (props) => {
  return (
    <ul className="main__list">
      <Pokemon data={props.data} />
    </ul>
  );
};

export default PokeList;
