import { useEffect, useState } from 'react';

const CurrencySelector = ({ currency, setCurrency }) => {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    fetch(
      'http://justcors.com/tl_94c41d8/api.coindesk.com/v1/bpi/supported-currencies.json'
    )
      .then((res) => res.json())
      .then((data) => setCurrencies(data));
  }, []);
  return (
    <select onChange={(evt) => setCurrency(evt.target.value)} value={currency}>
      {currencies.map((cur) => (
        <option key={cur.currency} value={cur.currency}>
          {cur.currency} - {cur.country}
        </option>
      ))}
      {/* <option value='AUD'>Australian Dollar</option>
      <option value='USD'>US Dollar</option>
      <option value='EUR'>Euro</option> */}
    </select>
  );
};

export default CurrencySelector;
