import React, { useState, useEffect } from 'react';

// If you think the dependency array/second parameter to useEffect is a way to specify when you wnt to re-render with useEffect you're going to run into problems. Instead, the dependency array should be thought of as a way to let react know about everything that the useEffect must watch for changes.
// It's a common beginners mistake to leave out the dependency list. Always think before specifying an empty dependency array.

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    // since we use the second form of setCount, which is a function that has access to previous state/count value
    // we do not need to add count to the dependency list.
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  // It's recommended that whenever you need to call a function within useEffect just go ahead and define the function within useEffect. This way when you read through the effect you're much more likely to see if you have a prop that has to be specified as a dependency.

  const someProp = 'example';
  useEffect(() => {
    const doSomething = () => console.log(someProp);
    doSomething();
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [count]);
  }, [someProp]);

  return <div>{count}</div>;
}

export default IntervalHookCounter;
