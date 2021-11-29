import React, { Component } from 'react';

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: '',
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  // To optimize performance and stop useEffect from calling it's function every time there's a re-render we can compare the count value before and after the update. If the state/count value changed we can conditionally update the title. To do that we include the parameters to componentDidUpdate prevProps & prevState. So we'll conditionally update the title only when the appropriate variable changes i/e/ only when the count value changes.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Updating document title');
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
