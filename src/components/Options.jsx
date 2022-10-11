import React from "react";

const Options = ({ option, handleClick }) => {
  return (
    <div onClick={() => handleClick(option)}>
      <input className="mr-2" type="radio" />
      {option}
    </div>
  );
};

export default Options;
