import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Countries() {
  const [data, setData] = useState([]);
  const [name, setQuery] = useState('');

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, [name]);

  return (
    <div style={{ textAlign: 'left', margin: '3em' }}>
      <div style={{ marginLeft: '2.5em' }}>
        <input value={name} onChange={e => setQuery(e.target.value)} />
      </div>
      <ul style={{ listStyle: 'none' }}>
        {data.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Countries;
