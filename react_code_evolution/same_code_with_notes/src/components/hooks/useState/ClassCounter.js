import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.incrementCount = this.incrementCount.bind(this);
  }

  // Can do it like this
  // incrementCount() {
  //   this.setState((prevCount) => ({
  //     count: prevCount.count + 1,
  //   }));
  // }

  // OR

  // Can do it like this
  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>Count: {count}</button>
      </div>
    );
  }
}

export default ClassCounter;
