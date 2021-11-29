import React, { Component } from 'react';

// setState key points
// 1. Always make use of setState and never modify state directly
// 2. Code has to be executed after the state has been updated? place that code in the callback function which is ///// the second argument to the setState method.
// 3. When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    // If you want to execute some code after the state has been updated you can pass in a callback function as a second parameter to the setState method
    //   () => {
    //     console.log('Callback value', this.state.count);
    //   }
    // );

    // react will group multiple setState calls into a single update for better performance. All the setState calls from increment() in incrementFive() are done in one single go and the updated value is not carried over between the different calls. Whenever you have to update a state based on the previous state you need to pass a function as an argument to the setState method instead of passing in an object like above. As a parameter to the arrow function we use the previous state of the component, which we name prevState here. So we're not using the current state. We're always using the previous state and building off that. This will give us the right results when the setState method is called numerous times in a row.
    // So when you have to update the state based on the previous state make sure to pass in a function to setState as an argument instead of the regular object. The function has access to the previous state which can be used to calculate the new state. The second argument for the function can be the props object if needed.
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </>
    );
  }
}

export default Counter;
