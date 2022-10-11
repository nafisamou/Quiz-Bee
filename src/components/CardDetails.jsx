import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz";
const CardDetails = () => {
  const quizes = useLoaderData().data;
  const { name, total, questions } = quizes;
  return (
    <div className="bg-yellow-50 p-8 ">
      <div>
        <h2 className="text-2xl mb-2 flex justify-center underline font-semibold"> Quize of {name} </h2>
        <h3>Total Quize : {total}</h3>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
        {questions.map((questionArray) => (
          <Quiz key={questionArray.id} questionArray={questionArray}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;
