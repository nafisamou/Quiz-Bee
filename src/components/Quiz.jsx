import React from "react";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import Options from "./Options.jsx";

const Quiz = ({ questionArray }) => {
  const { question, options, correctAnswer } = questionArray;
  console.log(options);
  const handleClick = (option) => {
    if (correctAnswer === option) {
      toast.success("Correct Ans!", { autoClose: 500 });
    } else {
      toast.error("Wrong Ans!", { autoClose: 500 });
    }
  };
  const showButtonHandler = (correctAnswer) => {
    toast.info("hi");
  };

  return (
    <div>
      <div className="d-flex justify-between">
        <div dangerouslySetInnerHTML={{ __html: question }}></div>
        <div>
        <button className="justify-end" onClick={() => showButtonHandler(correctAnswer)}>
          {" "}
          <FaEye />{" "}
        </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 border-4 p-4 bg-white">
        {options.map((option) => (
          <Options option={option} handleClick={handleClick}></Options>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
