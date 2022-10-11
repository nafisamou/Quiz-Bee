import React from 'react';
import { Link } from 'react-router-dom'
const SingleCard = ({card}) => {
    const{logo, total, name, id} = card;
    return (
        <div className=''>
            <div className="card card-compact w-96 bg-base-800 shadow-xl">
        <figure>
          <img src={logo} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Total Quize : {total}</p>
          <div className="card-actions justify-end">
           <Link to={`/singleCard/${id}`} aria-label='View Item'>
           <button className="btn btn-primary">Quize Details</button>
           </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SingleCard;