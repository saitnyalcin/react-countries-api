import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from './Country';

function Countries() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios(`https://restcountries.eu/rest/v2/`);
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  });

  return (
    <div style={{ textAlign: 'left', margin: '3em' }}>
      {/* <div style={{ marginLeft: '2.5em' }}>
        <input
          value={query}
          placeholder="Search country name.."
          onChange={e => setQuery(e.target.value)}
        />
      </div> */}
      <div className="container">
        {data.map(item => (
          <div key={item.name}>
            <Country
              name={item.name}
              capital={item.capital}
              flag={item.flag}
              population={item.population}
              nativeName={item.nativeName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countries;
