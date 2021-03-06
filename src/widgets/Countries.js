import React, { useEffect, useState } from "react";
import FilterResults from "react-filter-search";
import Country from "./Country";

function Countries() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      await fetch("https://restcountries.eu/rest/v2/")
        .then((response) => response.json())
        .then((data) => setData(data))
        .then((result) => {
          console.log("Success:", result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    fetchData();
  }, []);

  return (
    <div style={{ margin: "3em" }}>
      <div>
        <span>{data.length} countries found</span>
      </div>
      <div className="country-search">
        <input
          type="text"
          value={value}
          placeholder="Search.."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <FilterResults
          value={value}
          data={data}
          renderResults={(data) => (
            <div className="container">
              {data.map((item) => (
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
