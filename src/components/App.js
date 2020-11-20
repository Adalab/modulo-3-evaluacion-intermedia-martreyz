import "../stylesheets/App.scss";
import pokemon from "../data/pokemon.json";
import React, { useState, useEffect } from "react";
import PokeList from "./PokeList";

const favPokemons = [];
function App() {
  const [pokedex] = useState(pokemon);
  const [favPokedex, setFavPokedex] = useState([]);

  const addToFavourites = (pokemonIndex) => {
    const favPokemon = pokedex[pokemonIndex];

    if (favPokemons.indexOf(favPokemon) === -1) {
      favPokemons.push(favPokemon);
    } else {
      const pokeIndex = favPokemons.indexOf(favPokemon);
      favPokemons.splice(pokeIndex, 1);
    }
    setFavPokedex([...favPokemons]);
  };

  useEffect(() => console.log(favPokemons));

  return (
    <div>
      <header className="header">
        <h1 className="header__title">Mi Pokedex</h1>
      </header>
      <main className="main">
        <PokeList
          addToFavourites={addToFavourites}
          favourites={favPokedex}
          data={pokedex}
        />
      </main>
    </div>
  );
}

export default App;
