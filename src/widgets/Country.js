import React from 'react';
import Flag from './Flag';

const Country = ({ name, capital, flag, population, nativeName }) => {
  var newPopulation = population.toLocaleString();
  return (
    <div className="flex-container">
      <div>
        <Flag flag={flag} />
        <h3>{name}</h3>
        <h4>{capital}</h4>
        <h4>{newPopulation}</h4>
        <h4>{nativeName}</h4>
      </div>
    </div>
  );
};

export default Country;
