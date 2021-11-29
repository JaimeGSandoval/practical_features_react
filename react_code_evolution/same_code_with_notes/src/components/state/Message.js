import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome Visitor',
    };
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing',
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        {/* used parentheses here because it was because we're binding the 'this' keyword with the
        event handler so that it can change the state. The arrow function binds it to 'this'. If it wasn't working with a value that's in the constructor/state you wouldn't have to do it. */}
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </>
    );
  }
}

export default Message;
