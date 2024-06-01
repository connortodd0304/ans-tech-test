import React, { useState, useEffect } from 'react';

export default function CurrencyConverter () {
    const [currencyCodes, setCurrencyCodes] = useState([]);
    const [selectedCurrencyCode, setSelectedCurrencyCode] = useState("ARS");
    const [currentNumberValue, setCurrentNumberValue] = useState(0);
    const [result, setResult] = useState(null);

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

    const convertCurrencyToBTC = () => {
        fetch(`https://blockchain.info/tobtc?currency=${selectedCurrencyCode}&value=${currentNumberValue}`)
        .then(res => res.json())
        .then(data => {
            setResult(
                {
                    bitcoinValue: data,
                    currencyAmount: currentNumberValue,
                    currencyCode: selectedCurrencyCode
                }
            )
        })
        .catch(error => console.log(error));
    }

    return (
        <div>
        <h1>Currency to BTC Converter</h1>
        <input type="number" value={currentNumberValue} onChange={(event) => setCurrentNumberValue(event.target.value)}  />
        <select onChange={(event) => setSelectedCurrencyCode(event.target.value)}>
            {currencyCodes.map(currencyCode => (
                <option value={currencyCode}>{currencyCode}</option>
            ))}
        </select>
        <button onClick={convertCurrencyToBTC}>Convert</button>

        {result && (
            <div>
                {result.currencyAmount} {result.currencyCode} = {result.bitcoinValue} BTC
            </div>
        )}        
    </div>
    )
}