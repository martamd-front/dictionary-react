import React from "react";
import "./Definition.scss";

const Definition = ({ word, phonetic }) => {
  return (
    <div className="Definition">
      <p>{word}</p>
      <p>{phonetic}</p>
    </div>
  );
};

export default Definition;
