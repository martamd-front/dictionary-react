import React from "react";
import "./Meaning.scss";

const Meaning = ({ meaning }) => {
  console.log(meaning);
  return (
    <div className="Meaning">
      <h4>{meaning.partOfSpeech}</h4>
      {meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition} <br></br>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Meaning;
