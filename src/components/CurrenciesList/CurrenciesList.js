import React, { useState, useEffect } from 'react';
import { currencyCodeToSymbolConverter } from "../../helpers/helpers";
import './CurrenciesList.css';

export default function CurrenciesList() {
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
            <h1>Bitcoin Price Per Currency</h1>
            <div className='currencyCard'>
                <p>Currency Code</p>
                <p>Last Price</p>
            </div>
            {currencies?.map(currency => (
                <div className='currencyCard'>
                    <p>{currency.symbol}</p>
                    <p>{currencyCodeToSymbolConverter(currency.symbol)} {currency.last}</p>
                </div>
            ))}
        </div>
    )
}