import React from 'react';

function Card(property){
    return(
      <>
      <div className="cards">
        <div className="card">
          <img src={property.imglink} alt="PIC" className="card__img"/>
          <div className="card__info">
             <span className="card__category">{property.title}</span>
             <h3 className="card__title">{property.seriesname}</h3>
              <a href={property.serieslink} target="_blank">
             <button>Watch now</button>
             </a>
          </div>
        </div>
      </div>
      </>
    );
  }

  export default Card;