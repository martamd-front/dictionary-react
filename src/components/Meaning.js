import React from "react";
import "./Meaning.scss";

const Meaning = ({ meaning }) => {
  console.log(meaning);
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Meaning;
