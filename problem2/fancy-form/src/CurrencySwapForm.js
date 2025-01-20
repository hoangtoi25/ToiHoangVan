import React, { useState, useEffect } from 'react';  
import './CurrencySwapForm.css';  

const CurrencySwapForm = () => {  
    const [currencies, setCurrencies] = useState([]);  
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amount, setAmount] = useState('');  
    const [exchangeRate, setExchangeRate] = useState(0);  
    const [errorMessage, setErrorMessage] = useState('');  
    const [convertedAmount, setConvertedAmount] = useState(0);  

    //get data
    useEffect(() => {  
        const fetchData = async () => {  
            const response = await fetch('https://interview.switcheo.com/prices.json');  
            const data = await response.json();  
            setCurrencies(data);  
        };  
        fetchData();  
    }, []);  

    useEffect(() => {  
        if (amount !== '') {  
            handleSwap();  
        }  
    }, [amount]);  

    const handleSwap = () => {  
        if (!amount || isNaN(amount) || fromCurrency === toCurrency || !fromCurrency || !toCurrency) {  
            setErrorMessage('Please enter a valid amount and select different currencies.');  
            return;  
        }  

        const rate = getExchangeRate(fromCurrency, toCurrency);  

        if (rate > 0) {  
            const amountInFromCurrency = parseFloat(amount);  
            const amountInToCurrency = amountInFromCurrency * rate;  

            setExchangeRate(rate);  
            setConvertedAmount(amountInToCurrency);  
            setErrorMessage('');  
        } else {  
            setErrorMessage('Exchange rate not available for the selected currencies.');  
        }  
    };  

    const getExchangeRate = (from, to) => {  
        const fromCurrencyData = currencies.find(item => item.currency === from);  
        const toCurrencyData = currencies.find(item => item.currency === to);  

        if (fromCurrencyData && toCurrencyData) {  
            return fromCurrencyData.price / toCurrencyData.price;  
        }  
        return 0;  
    };  

    const handleFromCurrencyChange = (value) => {  
        setFromCurrency(value);  
        setAmount(''); // Reset amount when changing from currency  
        setConvertedAmount(0); // Reset converted amount  
        setExchangeRate(0); // Reset exchange rate  
        setErrorMessage(''); // Clear any error messages  
    };  

    const handleToCurrencyChange = (value) => {  
        setToCurrency(value);  
        setAmount(''); // Reset amount when changing to currency  
        setConvertedAmount(0); // Reset converted amount  
        setExchangeRate(0); // Reset exchange rate  
        setErrorMessage(''); // Clear any error messages  
    };  

    return (  
        <div className="currency-swap-form">  
            <h2>Currency Swap</h2>  
            <div>  
                <span>Select From Currency</span>  
                <select onChange={e => handleFromCurrencyChange(e.target.value)} value={fromCurrency}>  
                    <option value="">Select an option</option>
                    {currencies.map(item => (  
                        <option key={item.currency} value={item.currency}>{item.currency}</option>  
                    ))}  
                </select>  

                <span>Select To Currency</span>  
                <select onChange={e => handleToCurrencyChange(e.target.value)} value={toCurrency}>  
                    <option value="">Select an option</option>
                    {currencies.map(item => (  
                        <option key={item.currency} value={item.currency}>{item.currency}</option>  
                    ))}  
                </select>  

                <span>Enter a value</span>  
                <input  
                    type="number"  
                    placeholder="Amount"  
                    value={amount}  
                    onChange={e => setAmount(e.target.value)}  
                />  
                <button onClick={handleSwap}>Swap</button>  
            </div>  

            {errorMessage && <div className="error">{errorMessage}</div>}  

            {exchangeRate > 0 && fromCurrency && toCurrency && (  
                <div>  
                    <strong>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</strong>  
                </div>  
            )}  
        </div>  
    );  
}  

export default CurrencySwapForm;