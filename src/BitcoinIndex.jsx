import React, { useEffect, useState } from 'react';

const BitcoinIndex = ({ currency = 'AUD' }) => {
  const [price, setPrice] = useState(0);

  // Mount and Update
  useEffect(() => {
    console.log('useEffect triggered');
  });

  // Mount only
  useEffect(() => {
    fetch(`http://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
      .then((response) => response.json())
      .then((data) => setPrice(data.bpi[currency].rate_float));
    console.log('useEffect on mount');
  }, [currency]);

  // Mount and price update only
  useEffect(() => {
    console.log('useEffect on price ');
  }, [price]);

  return (
    <div>
      <h1>Bitcoin Index</h1>
      {price > 0 ? (
        <h3>
          Current Price : {currency} {price}
        </h3>
      ) : (
        <h3>Loading....</h3>
      )}
    </div>
  );
};

export default BitcoinIndex;
