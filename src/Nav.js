import React from 'react';

const Nav = ({ prev, next }) => {
  return (
    <div className='row'>
      <div className='prev' onClick={prev}>
        Prev
      </div>
      <div className='next' onClick={next}>
        Next
      </div>
    </div>
  );
};

export default Nav;
