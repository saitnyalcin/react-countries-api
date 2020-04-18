import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from './Country';
import FilterResults from 'react-filter-search';

function Countries() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

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
  }, []);

  return (
    <div style={{ margin: '3em' }}>
      <div className="country-search">
        <input
          type="text"
          value={value}
          placeholder="Search.."
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div>
        <FilterResults
          value={value}
          data={data}
          renderResults={data => (
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
          )}
        />
      </div>
    </div>
  );
}

export default Countries;
