import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz";
const CardDetails = () => {
  const quizes = useLoaderData().data;
  const { name, total, questions } = quizes;
  return (
    <div className="bg-white p-2 mt-5">
      <div>
        <h2 className="text-2xl mb-2 flex justify-center underline font-semibold font-serif p-12"> Quize of <span className="text-cyan-700 ml-3 font-serif">{name} </span></h2>
        <h3 className="font-mono text-xl">Total Quize : <span className="font-semibold">{total}</span></h3>
      </div>
      <div className="grid lg:grid-cols-1 gap-4 grid-cols-1 px-52">
        {questions.map((questionArray) => (
          <Quiz key={questionArray.id} questionArray={questionArray}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;
