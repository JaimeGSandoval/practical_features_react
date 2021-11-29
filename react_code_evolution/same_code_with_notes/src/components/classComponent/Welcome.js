import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    // In class components you destructure within the render method
    const { name, heroName } = this.props;
    // If you had state in this component you can destructure it like so
    // const {state1, state2} = this.state
    return (
      <h1>
        name: {name} hero name: {heroName}
      </h1>
    );
  }
}

export default Welcome;
