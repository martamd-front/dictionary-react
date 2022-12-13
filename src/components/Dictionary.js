import React, { useState } from "react";
import "./Dictionary.scss";
import axios from "axios";
import Results from "./Results";
import PropagateLoader from "react-spinners/PropagateLoader";

const Dictionary = () => {
  const [keyword, setKeyword] = useState("sunset");
  const [results, setResults] = useState(null);

  const showResults = (response) => {
    setResults(response.data[0]);
  };

  const search = () => {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResults);
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
        <h2>What word do you want to look up?</h2>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateKeyword} />
        </form>
      </div>
    </header>
  );

  if (results !== null) {
    return (
      <div className="Dictionary">
        {form}
        <div className="container">
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="Loading">
        <PropagateLoader color="#11b3d7" />
      </div>
    );
  }
};

export default Dictionary;
