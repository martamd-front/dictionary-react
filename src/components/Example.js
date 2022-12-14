import React from "react";

const Example = ({ example }) => {
  if (example) {
    return (
      <span className="Example">
        <br></br>
        <strong>Example</strong>: <em>{example}</em>
      </span>
    );
  } else {
    return null;
  }
};

export default Example;
