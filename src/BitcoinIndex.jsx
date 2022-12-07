import React, { useEffect, useState } from 'react';

const BitcoinIndex = () => {
  const [price, setPrice] = useState(0);

  // Mount and Update
  useEffect(() => {
    console.log('useEffect triggered');
  });

  // Mount only
  useEffect(() => {
    fetch('http://api.coindesk.com/v1/bpi/currentprice/AUD.json')
      .then((response) => response.json())
      .then((data) => setPrice(() => data.bpi.AUD.rate_float));
    console.log('useEffect on mount');
  }, []);

  // Mount and price update only
  useEffect(() => {
    console.log('useEffect on price ');
  }, [price]);

  return (
    <div>
      <h1>Bitcoin Index</h1>
      {price > 0 ? <h3>Current Price : AUD {price}</h3> : 0}
    </div>
  );
};

export default BitcoinIndex;
