import React from 'react';

const Card = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className='card' key={index}>
            <img src={item.src} alt='' />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href='/'>React more</a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
