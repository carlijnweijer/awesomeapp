import React from "react";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon/Pokemon";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <main className="container">
      <Title content="Pokemons" />
      <div className="row">
        {all_pokemon.map(function (pokemon) {
          const { name, weight, awesome, terrifying, abilities } = pokemon;
          return <Pokemon pokemon={pokemon} />;
        })}
      </div>
    </main>
  );
}

export default App;
