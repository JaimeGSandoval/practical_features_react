import React, { useState, useEffect } from 'react';

// The effect hook let's you perform side effects in functional components
// It is a close replacement for componentDidMount, componentDidUpdate, and componentDidUnmount. These 3 lifecycle methods can be handled and replaced with the useEffect hook. It helps keep related code together and unrelated code separate.
// When you specify useEffect we're requesting react to execute the function that's passed as an argument every time the component renders including the initial render.
// useEffect gets placed inside the component so it can have access to state and props.
// The useEffect function hook gets called after every render.

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // In some cases applying the effect after every render can cause performance issues, so you need a way to conditionally run effect from a component.
  // To conditionally execute an effect we pass in a second parameter. This parameter is an array. Within this array you need to specify the props or state that we need to watch for. Only if those props and state specified in the array were to change the effect would be executed. For our example we need the effect to be executed only when the count value changes. So in order to conditionally render an effect specify the second parameter to useEffect. The second parameter is an array of values that the effect depends on. If the valueas don't change between renders useEffect does not run.
  useEffect(() => {
    console.log('useEffect - updating title');
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default HookCounterOne;
