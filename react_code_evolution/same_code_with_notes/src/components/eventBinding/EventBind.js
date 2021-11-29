import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello',
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Goodbye',
  //   });
  // }

  // 4th way using an arrow function is also a recommended way of binding this
  clickHandler = () => {
    this.setState({
      message: 'Goodbye',
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 4 ways of binding this: 2 ways within the render method and one way within the constructor and one way with the arrow function as above. Use the constructor way or arrow function way above. It's the official way in react docs. The other two ways the button gets re-rendered with every click. With the constructor way it only gets rendered once */}
        {/* this way isn't very good */}
        {/* <button onClick={this.clickHandler.bind(this)}>EventBind click</button> */}
        {/* Arrow function way in render isn't very good either */}
        {/* <button onClick={() => this.clickHandler()}>EventBind click</button> */}
        {/* This is the recommended way of doing it with the bind in the constructor */}
        {/* <button onClick={this.clickHandler}>EventBind click</button> */}
      </div>
    );
  }
}

export default EventBind;
