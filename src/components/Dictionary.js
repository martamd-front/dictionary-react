import React, { useState } from "react";
import "./Dictionary.scss";
import axios from "axios";
import Definition from "./Definition";

const Dictionary = () => {
  const [keyword, setKeyword] = useState("sunset");
  const [definition, setDefinition] = useState({ ready: false });

  const showDefinition = (response) => {
    setDefinition({
      ready: true,
      word: response.data[0].word,
      phonetic: response.data[0].phonetic,
    });
  };

  const search = () => {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showDefinition);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const updateKeyword = (event) => {
    setKeyword(event.target.value);
  };
  const form = (
    <header className="App-header">
      <div className="container">
        <h1>Dictionary project</h1>
        <h2>What word do you want to loaaok up?</h2>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateKeyword} />
        </form>
      </div>
    </header>
  );

  if (definition.ready) {
    return (
      <div className="Dictionary">
        {form}
        <div className="container">
          <Definition word={definition.word} phonetic={definition.phonetic} />
        </div>
      </div>
    );
  } else {
    search();
    return <div>{form}</div>;
  }
};

export default Dictionary;
