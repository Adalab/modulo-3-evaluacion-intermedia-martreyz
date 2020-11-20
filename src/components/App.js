import "../stylesheets/App.scss";
import pokemon from "../data/pokemon.json";
import React, { useState } from "react";
import PokeList from "./PokeList";

function App() {
  const [pokedex] = useState(pokemon);
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Mi Pokedex</h1>
      </header>
      <main className="main">
        <PokeList data={pokedex} />
      </main>
    </div>
  );
}

export default App;
