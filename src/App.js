import React, { useState } from 'react';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import CurrenciesList from './components/CurrenciesList/CurrenciesList';
import './App.css';

// Feedback on test
// My main aim was to focus on functionality initially 
// I decided to go for a toggle feature but I could have also used router for seperate pages
// If I had more time I would do the following:
  // write unit tests for the individual functions and E2E tests to test the UI Functionality
  // implement a style system such as material ui or bootstrap as i was not working from a design
  // take into consideration accessibility 
  //  I would use git branches instead of pushing everything directly to main and create each part as an individual feature 
  // which would be tracked with a tool such as jira

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
