import React from "react";
import "../Pokemon/Pokemon.scss";

export default function Pokemon(props) {
  const { pokemon } = props;
  const { name, weight, awesome, terrifying, abilities } = pokemon;
  return (
    <div className="card shadow-sm mb-4 my-5 Pokemon">
      <div className="card-body">
        <h5 className="card-title">Pokemon name: {name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          Awesome: {awesome ? "YES!" : "nope, not really"}
        </h6>

        <p className="card-text mb-0">
          Weight: {weight} <br />
          Terrifying: {terrifying ? "Very" : "nah, lovable"} <br />
          {abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {abilities.map(function (ability) {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
    </div>
  );
}
