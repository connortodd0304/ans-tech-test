import React, { useState, useEffect } from 'react';

export default function CurrencyConverter () {
    const [currencyCodes, setCurrencyCodes] = useState([]);

    useEffect(() => {
        fetchCurrencyCodes();
    }, []);

    const fetchCurrencyCodes = () => {
        fetch('https://blockchain.info/ticker')
            .then(res => res.json())
            .then(data => {
                setCurrencyCodes(Object.keys(data))
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
        <h1>Currency to BTC Converter</h1>
        <input type="number"  />
        <select>
            {currencyCodes.map(currencyCode => (
                <option value={currencyCode}>{currencyCode}</option>
            ))}
        </select>
        <button>Convert</button>

    </div>
    )
}