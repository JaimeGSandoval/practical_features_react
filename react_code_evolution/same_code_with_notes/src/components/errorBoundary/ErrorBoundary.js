// Error Boundary is a class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an Error Boundary. Error boundary provides a way to handle errors gracefully.
// The static method getDerivedStateFromError method is used to render a fallback UI after and error is thrown and the componentDiCatch method is used to log the error information.
// The placement of the error boundary is completely up to you. You can just wrap the top level component or wrap any nested individual components so that component has a fallback UI leaving the rest of your user interface working as expected.
// Error boundaries are react components that catch javascript error in their child component tree, log those errors, and display a fall-back UI.
// A class component becomes an error boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods Ex: using the hasError: true which causes the UI to re-render.
// The placement of the error boundary also matters as it controls if the app should have the fall-back UI or just the component causing the problem.

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  // takes two parameters error & info. This method is pretty much used to log the errors
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
