import React from 'react';

const Flag = ({ flag }) => {
  return (
    <div className="country-flag">
      <img src={flag} alt="" />
    </div>
  );
};

export default Flag;
