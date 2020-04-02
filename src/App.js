import React from 'react';
import logo from './earth.gif';
import './App.css';
import Countries from './widgets/Countries';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Countries />
    </div>
  );
}

export default App;
