// Step 1 - import useReducer
import React, {useReducer} from 'react'

// 1. import useReducer from react
// 2. Define initial state and the reducer function.
// 3. get a hold of the value to display in the jsx and a way to call the reducer function with the right action.

// we start by importing useReducer from react. After that, within our component we call useReducer, passing in a reducer function and the initial state. The initial state is the numeric value set to zero which is the count value. The reducer function accepts the state and an action and returns the new state depending on the action. If the value is increment it return the state value plus 1. If the action is decrement it returns the state valueminus

// A call to useReducer returns a pair of values: the current value of the state, which is the count value in our example. And the dispatch method which is capable of accepting an action to execute the code specified inside the render function. We use the dispatch method to dispatch the right action based on wht button the user clicks.The action retrigggers the state transitions. When the state changes the component re-renders and the correct value is displayed.

// Step 2 - Define initial state value and reducer function
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
    return initialState
    default:
      throw new Error();
  }
}

function CounterOne() {
  // 3. get a hold of the value to display in the jsx. useREducer returns the current state which we have called count pairedwith a dispatch method. The dispatch method lets us execute the code based on a particular action.
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'reset'})}>+</button>
    </>
  );
}
