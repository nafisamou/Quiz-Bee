import React from "react";

const Options = ({ option, handleClick }) => {
  return (
    <div className="border-2 p-2 hover:bg-pink-50">
      <input className="mr-2" type="radio"name="choose" id={option} value={option} onChange={()=>handleClick(option)} />
      {/* {option} */}
      <label htmlFor={option}>{option}</label>
    </div>
  );
};

export default Options;
