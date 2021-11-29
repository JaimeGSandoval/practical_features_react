import React, { useState } from 'react';

// When building on top of the previous value of state/count you need to use the second form of the setCount method. Instead of passing the value of the new state variable, we pass in a function that has access to the previous state value.

// Any time you need to update state value based on the previous state value always go with the safer option of passing a function that will set the new state value. The argument for this function will be the previous state which it has access to automatically.

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // Wrong way to build off of previous state/count value. Won't increment because the value is stale.
      // setCount(count + 1);

      // Right way to build off of previous state/value. Use the second form of the set method that's offered by useState, which is passing in a function that has access to the previous state/value
      setCount((previousCount) => previousCount + 1);
    }
  };

  return (
    <div>
      <div>{count}</div>
      {/* This is the wrong way to access the previous value of state/count and build on that value */}
      {/* <button onClick={() => setCount(initialCount)}>Reset Count</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
      <button onClick={incrementFive}>Increment 5</button> */}

      <button onClick={() => setCount(initialCount)}>Reset Count</button>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increment Count
      </button>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Decrement Count
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
