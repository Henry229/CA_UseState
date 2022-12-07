import React, { useState } from 'react';
import ShowCount from './showCount';

// const ShowCount = ({ value = 0 }) => {
//   return <p>You have clicked {value} times!</p>;
// };

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>State</h1>
      <ShowCount value={count} />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          // console.log(count);
        }}
      >
        {console.log(count)}
        Click Me {count}!
      </button>
    </div>
  );
};

export default App;
