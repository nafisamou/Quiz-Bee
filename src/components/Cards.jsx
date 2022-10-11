import React from 'react';
import { useLoaderData } from "react-router-dom";
import SingleCard from './SingleCard';
const Cards = () => {
    const quiz = useLoaderData().data;
  console.log(quiz)
    return (
        <div>
            <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
       <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2'>
       {
        quiz.map(card=><SingleCard key={card.id} card={card}></SingleCard>)
        }
       </div>
      </div>
        </div>
    );
};

export default Cards;