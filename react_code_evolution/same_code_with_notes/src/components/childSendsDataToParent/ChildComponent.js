import React from 'react';
// If a child component wants to communicate/send data w/ the parent component you still use props, but you pass a reference to a method as props to the child component. In this example, when we click on button in the ChildComponent we execute the method defined in the parent component, which is called greetParent. Basically a child component calls a parent components method. This is achieved using props. The only difference is we pass the method itself as a prop to the child component.
// How to pass a parameter when calling the parent method from the child component? You do this by using an arrow function. Arrow function syntax is the simplest way to pass parameters from the child component to the parent component

// 1. In the parent component define the method
// 2. In the child component tag, pass the method as a prop
// 3. In the child component access the method using the props object. If at all you have to pass a parameter to    // send to the parent component, use the arrow function syntax

function ChildComponent(props) {
  return (
    <div>
      {/* Any parameters passed to the arrow function will be sent to the parent component */}
      <button onClick={() => props.greetHandler('Naruto')}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
