import React, { useState, useEffect } from 'react';

export default function CurrenciesList () {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
       fetchCurrencies();
    }, []);

    const fetchCurrencies = () => {
        fetch('https://blockchain.info/ticker')
            .then(res => res.json())
            .then(data => {
                console.log(Object.values(data));
                setCurrencies(Object.values(data))
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <h1>CurrenciesList</h1>
            {currencies?.map(currency => (
                <div>
                    <p>{currency.symbol}</p>
                    <p>{currency.last}</p>
                </div>
            ))}
        </div>
    )
}