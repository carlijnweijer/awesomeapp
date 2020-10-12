import React from "react";

export default function Pokemon(props) {
  const { pokemon } = props;
  const { name, weight, awesome, terrifying, abilities } = pokemon;
  return (
    <div>
      <h2>Pokemon name: {name}</h2>
      <p>Weight: {weight}</p>
      <p>Awesome: {awesome ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {terrifying ? "Very" : "nah, lovable"}</p>
      <p>Abilities: </p>
      <ul>
        {abilities.map(function (ability) {
          return <li>{ability}</li>;
        })}
      </ul>
    </div>
  );
}
