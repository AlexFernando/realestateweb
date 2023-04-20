import React, { useState } from 'react';

function ExchangeRates() {
  const [usdEur, setUsdEur] = useState([]);
  const [usdIls, setUsdIls] = useState([]);

  const handleUsdEurClick = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR', {
        headers: {
          'X-Api-Key': 'YOUR_API_KEY'  
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setUsdEur(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUsdIlsClick = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/exchangerate?pair=USD_ILS', {
        headers: {
          'X-Api-Key': 'YOUR_API_KEY'  
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setUsdIls(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const exchangeRateUI = () => (
    <div>
      <h2>Exchange Rates</h2>
      <button onClick={handleUsdEurClick}>USD to EUR</button>
      <button onClick={handleUsdIlsClick}>USD to ILS</button>
      <p>USD to EUR: {usdEur}</p>
      <p>USD to ILS: {usdIls}</p>
    </div>
  )

  return {EuroRate: usdEur.exchange_rate, ShekelsRate: usdIls.exchange_rate, exchangeRateUI};
}

export default ExchangeRates;



// return {EuroRate: usdEur.exchange_rate, ShekelsRate: usdIls.exchange_rate, ButtonCoinSet};
//HXBv+KXBsF4/0Y1m5zx46Q==o44oHdKyfBWCcrwK