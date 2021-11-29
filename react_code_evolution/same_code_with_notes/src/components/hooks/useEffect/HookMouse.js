import React, { useState, useEffect } from 'react';
// How to mimic componentDidMount with useEffect i.e. how to have useEffect only run only once.
// useEffect is called after each re-render unless you specify the dependency array. In our example we don't need for our effect to depend on anything. We want it called once on initial render only. The way we do that is by specifying an empty array as the second parameter to the useEffect. We're telling react that this effect does not depend on any props or state so there's no reason to call this effect on re-renders. This makes react call the effect on the initial render and forget about it.

// So we can mimic componentDiMount with useEffect hook by simply passing in an empty array as the second parameter to useEffect.
function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // When you unmount a component you need to make sure that you cancel all subscriptions that it has and remove all event listeners associated with it. If you don't it'll cause memory leaks and react will throw an error. That's why you have to clean up after your component. You do this in the useEffect return function. The equivalent to this in a class is componentDiUnmount. To mimic this lifecycle functionality in useEffect, the function that's passed to useEffect can return a function which will be executed when the component unmounts. So what ever you return is basically your clean up function.
  // So when you want to execute some component clean up code you include it in a function and return that function from the function passed to useEffect. The clean up code can be cancelling subscriptions, timers or removing event handlers, etc.
  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      console.log('Component unmounting code');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  const logMousePosition = (e) => {
    console.log('mouse event');
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div>
      Hooks X position: {x} Y position: {y}
    </div>
  );
}

export default HookMouse;
