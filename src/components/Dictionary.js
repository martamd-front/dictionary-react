import React, { useState } from "react";
import "./Dictionary.scss";

const Dictionary = () => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  };

  const updateKeyword = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateKeyword} />
      </form>
    </div>
  );
};

export default Dictionary;
