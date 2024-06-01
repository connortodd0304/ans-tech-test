import React, { useState } from 'react';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import CurrenciesList from './components/CurrenciesList/CurrenciesList';
import './App.css';

function App() {
  const [isCurrencyConverterDisplayed, setCurrencyConverterDisplay] = useState(false);

  return (
    <div className="App">
      <h1>Connor's Currency App</h1>
      <div>
        <button onClick={() => setCurrencyConverterDisplay(false)}>Currencies</button>
        <button onClick={() => setCurrencyConverterDisplay(true)}>Currencies Converter</button>
      </div>

      {isCurrencyConverterDisplayed ?
        <CurrencyConverter />
        :
        <CurrenciesList />
      }
    </div>
  );
}

export default App;
