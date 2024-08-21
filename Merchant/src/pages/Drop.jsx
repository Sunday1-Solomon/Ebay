import React, { useState } from 'react';

const CountrySelector = () => {
  const countries = [
    "Germany",
    "Spain",
    "USA",
    "Mexico",
    "India"
  ];

  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleCountryChange = (event) => {
    const selected = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedCountries(selected);
  };

  return (
    <div id="container">
      <h2>Select Multiple Countries</h2>
      <div>
        <label>Choose Countries:</label>
        <select
          multiple
          value={selectedCountries}
          onChange={handleCountryChange}
          style={{ width:"15%" }}
        >
          {countries.map((country, key) => (
            <option key={key} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div>
        <p>Selected Countries:</p>
        <ul>
          {selectedCountries.map((country, key) => (
            <li key={key}>{country}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountrySelector;
