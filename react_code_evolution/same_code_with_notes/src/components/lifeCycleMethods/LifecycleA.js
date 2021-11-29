import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jaime',
    };
    console.log('LifecycleA constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('LifecycleA getSnapShotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  }

  changeState() {
    this.setState({
      name: 'Kakashi',
    });
  }

  render() {
    console.log('LifecycleA render');
    return (
      <>
        <div>LifecycleA</div>
        <button onClick={() => this.changeState()}>Change Name</button>
        <LifecycleB />
      </>
    );
  }
}

export default LifecycleA;

// order of execution during mounting phase with a child component:
// LifecycleA constructor
// LifecycleA getDerivedStateFromProps
// LifecycleA render
// LifecycleB constructor
// LifecycleB getDerivedStateFromProps
// LifecycleB render
// LifecycleB componentDidMount
// LifecycleA componentDidMount

// order of execution during updating phase w/ child component. Render and componentDidUpdate are the more commonly used methods during the update lifecycle. The other three methods exist for special cases and are to be used sparingly. If you use them make sure you know what you're doing.
// LifecycleA getDerivedStateFromProps
// LifecycleA shouldComponentUpdate
// LifecycleA render
// LifecycleB getDerivedStateFromProps
// LifecycleB shouldComponentUpdate
// LifecycleB render
// LifecycleB getSnapShotBeforeUpdate
// LifecycleA getSnapShotBeforeUpdate
// LifecycleB componentDidUpdate
// LifecycleA componentDidUpdate
