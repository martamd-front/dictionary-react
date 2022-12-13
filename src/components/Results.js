import React from "react";
import Meaning from "./Meaning";
import "./Results.scss";

const Results = ({ results }) => {
  if (results) {
    return (
      <div className="Results">
        <div className="box-results">
          <h3>{results.word}</h3>
          <p>{results.phonetic}</p>
        </div>
        {results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
