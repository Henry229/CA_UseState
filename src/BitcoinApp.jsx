import React, { useState } from 'react';
import BitcoinIndex from './BitcoinIndex';
import CurrencySelector from './CurrencySelector';

const BitcoinApp = () => {
  const [currency, setCurrency] = useState('AUD');
  return (
    <div>
      <BitcoinIndex currency={currency} />
      <CurrencySelector currency={currency} setCurrency={setCurrency} />
    </div>
  );
};

export default BitcoinApp;
