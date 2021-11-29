import React, { Component } from 'react';
// When you're building apps w/ react you may often need to show or hide some html based on a certain condition
// Conditional rendering in react works the same way as in JS. There are 4 different ways to do it:
// 1. if/else
// 2. element variables
// 3. ternary operators
// 4. short circuit operator

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // Try to stick to using Ternary operator or short circuit for conditional rendering

    // 1. if/else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Jaime</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // 2. Element variable
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Jaime</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    // 3. Ternary operator. Try to use this technique over the others. Easier to read
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Jaime</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // 4. Short Circuit. When you want to render something or nothing, you use the short circuit operator. Ex: if the user is logged in, you want to print a greeting. If they're not logged in, you don't want to render anything at all
    // The expression first evaluates the left side of the operator. If it's true it also evaluates the right side
    // of the operator. If the left side evaluates to false the right side will never be evaluated
    return this.state.isLoggedIn && <div>Welcome Jaime</div>;
    // return (
    //   <div>
    //     <div>Welcome Jaime</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
